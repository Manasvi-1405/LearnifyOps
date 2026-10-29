# SEO preservation baselines

`../seo-baseline.json` checks the current prerendered HTML. `seo-preservation.json`
also checks protected source files and the original page output, with the four
explicitly reviewed homepage heading substitutions handled by the existing
verifier. Neither verifier automatically accepts or regenerates hashes.

## Programme-page hash correction

The CSS-warning fix intentionally removed the ineffective
`tracking-[0.18em!]` class from `ProgramFacts`. Its Windows HTML hash changed from
`d79dd9d2f43c28bc28f4705e828329e738af0781417c6b21628a7faaf6d9def5`
to `aaf5ed43faa0c44eab9840642ee6deba9f7f9b2f904b9ab6f3500f5b580f41cd`.
Commit `f2d55ce` updated both baselines for that intentional edit.

A separate platform difference remained: multiline quoted `className` attributes
in `ValueSection` compiled to different whitespace with CRLF and LF source.
For the same post-CSS-fix source, an LF build produced
`d068eb75b5106486c19e85d33717cf09077ee56e16b4195f4878e824c2e1ff1b`.
The class tokens, their order, visible text and metadata were identical; the
strict body hash correctly detected the differing HTML bytes.

The 12 affected source attributes are now single-line, preserving all classes
and their order. This makes the renderer deterministic without changing the
verification assertions or normalising away differences in `snapshot()`.
The resulting `/program` hash is:

```text
402065de7b4a28626683b59c822e730e07f895f4a79c7ea7dc0329de63ade9ad
```

Both fixtures update only `/program`; the preservation fixture also updates the
exact source hash of `ProgrammeSections.jsx`. Other routes, metadata, CSS assets,
styles, copy and application behaviour remain unchanged. Any future baseline
update must first establish the precise intended HTML difference; do not refresh
hashes merely to silence a failed assertion.

Validation reproduced the earlier mismatch by rebuilding with LF source. After
the fix, CRLF-source/five-worker and LF-source/one-worker production builds both
produced the hash above with zero CSS warnings. The original HTML and the new
HTML matched after comparing their class token lists, and their generated CSS
asset URLs were identical. All three existing verification scripts passed with
their assertions unchanged.

For context, VPS commit `86e12b9` is the earlier master merge and does not include
`f2d55ce`. Deploy the reviewed `nextjs-migration` changes (or merge them into the
deployment branch), preserve any server-local edits, and rebuild before running:

```bash
npm run verify:migration
npm run verify:seo
npm run verify:seobility
```
