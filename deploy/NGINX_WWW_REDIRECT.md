# LearnifyOps Nginx redirect — staged preparation and deployment

**Not executed on the VPS.** The active `/etc/nginx/sites-enabled/learnifyops` is not in the supplied files and no SSH session is configured. Public read-only checks confirmed that both hostnames present a valid certificate covering `learnifyops.com` and `www.learnifyops.com`, but do not reveal the on-disk certificate paths or vhost contents.

The production-specific patch must be generated from the actual host, not guessed TLS paths. The supplied `scripts/prepare-nginx-www.mjs` reads a saved copy and writes **only a new staged file**. It supports the common Certbot layout with one combined HTTPS block and existing LearnifyOps-only HTTP blocks. It preserves the original application block except its `server_name`, copies existing TLS/listen settings into a new www-only redirect block, and changes HTTP redirects to the canonical HTTPS host. It refuses shared hostnames, separate/unusual HTTPS blocks, unexpected proxy ports, missing explicit certificates or non-standard rewrite logic. Five automated fixture tests pass; this is not a claim that the production layout has been tested.

The essential generated change is:

```diff
-    server_name learnifyops.com www.learnifyops.com;
+    server_name learnifyops.com;
```

The new HTTPS block has only `www.learnifyops.com` as its hostname, the existing HTTPS listen/TLS lines copied verbatim, and:

```nginx
return 301 https://learnifyops.com$request_uri;
```

The existing HTTP host blocks use the same directive. `$request_uri` preserves the path and query; it never uses untrusted `$host` as the destination. The canonical HTTPS application block retains `/` → port 5174 and `/api` → port 5001 without a self-redirect. No Next.js redirect is added.

## 1. Inspect and prepare an exact patch

Run as the existing deployment user over SSH. Replace the host and `APP_DIR` with the **verified** process working directory. Do not assume the local backup folder has the same deployed path.

```bash
ssh DEPLOY_USER@VPS_HOST
set -euo pipefail
pm2 list
pm2 describe learnifyops-next
APP_DIR=/ACTUAL_LEARNIFYOPS_NEXTJS_WORKING_DIRECTORY
cd "$APP_DIR"
pwd
git status --short
git branch --show-current
git rev-parse HEAD

VHOST=$(readlink -f /etc/nginx/sites-enabled/learnifyops)
STAMP=$(date -u +%Y%m%dT%H%M%SZ)
BACKUP="/var/backups/learnifyops-www-$STAMP"
sudo install -d -m 700 -o "$(id -un)" -g "$(id -gn)" "$BACKUP"
sudo nginx -t
sudo nginx -T > "$BACKUP/nginx-before.txt" 2>&1
sudo cat "$VHOST"
grep -n -B 15 -A 40 'server_name.*learnifyops' "$BACKUP/nginx-before.txt"
```

Inspect the full blocks and their includes, not only grep excerpts. Verify that no other active file claims the same names and that no block being modified is shared with another domain. If an included file contains server-level routing, inspect it as well. Do not change britinstitute.uk, its subdomains or any other vhost.

Read the current certificate path from the actual HTTPS block and check it:

```bash
CERT_FILE=/ACTUAL_EXISTING_FULLCHAIN_PATH
sudo openssl x509 -in "$CERT_FILE" -noout -dates -ext subjectAltName
sudo openssl x509 -in "$CERT_FILE" -noout -checkhost learnifyops.com
sudo openssl x509 -in "$CERT_FILE" -noout -checkhost www.learnifyops.com
```

Require both names in the certificate SANs and successful hostname matches. Public checks on 28 October 2026 observed a certificate valid until 29 November 2026, but the actual current files must still be verified. Do not replace certificates, edit renewal configuration or invoke Certbot for this redirect.

Once the reviewed helper is available in `APP_DIR`, prepare the exact staged file and diff:

```bash
sudo cp -a -- "$VHOST" "$BACKUP/learnifyops.before"
printf '%s\n' "$VHOST" > "$BACKUP/vhost-path"
sudo cat "$VHOST" > "$BACKUP/learnifyops.input"
node --test scripts/prepare-nginx-www.test.mjs
node scripts/prepare-nginx-www.mjs \
  "$BACKUP/learnifyops.input" "$BACKUP/learnifyops.staged"
diff -u --label "$VHOST.before" --label "$VHOST" \
  "$BACKUP/learnifyops.input" "$BACKUP/learnifyops.staged" \
  > "$BACKUP/nginx-www-redirect.patch" || test "$?" -eq 1
cat "$BACKUP/nginx-www-redirect.patch"
```

This produces the **exact server-specific Nginx patch** from the inspected configuration without editing the active host. Check the complete diff: certificate paths, SSL includes, Certbot comments, proxy locations/headers/timeouts and unrelated host blocks must remain intact. The new www block must not copy a second `default_server` designation. If the helper refuses the actual layout, stop and supply the actual configuration for a manual minimal patch; do not force its assumptions or use the sample fixture as production config.

## 2. Install, test and reload only on success

```bash
# Refuse to overwrite a vhost changed by another operator/Certbot since backup.
sudo cmp -- "$VHOST" "$BACKUP/learnifyops.input"
sudo cp -- "$BACKUP/learnifyops.staged" "$VHOST"
if sudo nginx -t > "$BACKUP/nginx-test.txt" 2>&1 \
  && ! grep -Eiq '\[warn\]|conflicting server name|duplicate' "$BACKUP/nginx-test.txt"; then
  cat "$BACKUP/nginx-test.txt"
  sudo systemctl reload nginx
else
  cat "$BACKUP/nginx-test.txt"
  sudo cp -a -- "$BACKUP/learnifyops.before" "$VHOST"
  sudo nginx -t
  echo 'Restored original host; no reload performed'
  exit 1
fi
```

No PM2 or backend restart is needed for an Nginx-only change. `nginx -t` must be clean, including no new conflicting-name warnings, before reloading. Nginx reload is graceful; do not restart all VPS services.

## 3. Verify after deployment

```bash
curl -I https://www.learnifyops.com/
curl -I https://www.learnifyops.com/program
curl -I "https://www.learnifyops.com/program?source=test"
curl -I https://learnifyops.com/
curl -I http://www.learnifyops.com/
curl -I http://learnifyops.com/
curl -I https://learnifyops.com/test-page-not-found
curl -fsS https://learnifyops.com/api/health
npm run verify:seo -- --base-url https://learnifyops.com --redirects
```

Expect HTTPS canonical home/program 200, www and HTTP variants 301 directly to HTTPS non-www, exact path/query preservation, and the unknown page 404. Do not add `-L` when checking the first-hop status and Location. The SEO script uses GET page source for metadata, not HEAD alone. Do not test backend writes or submit production enquiry forms.

## 4. Roll back the Nginx change

Check there have been no later operator/Certbot edits before restoring:

```bash
sudo diff -u -- "$VHOST" "$BACKUP/learnifyops.staged"
sudo cp -a -- "$BACKUP/learnifyops.before" "$VHOST"
sudo nginx -t && sudo systemctl reload nginx
curl -I https://learnifyops.com/
curl -fsS https://learnifyops.com/api/health
```

Restore only the recorded LearnifyOps vhost. Keep all backups and certificate files. Do not install the full `nginx -T` dump as a configuration file.
