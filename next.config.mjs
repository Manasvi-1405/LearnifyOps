const apiTarget = process.env.API_PROXY_TARGET || "http://127.0.0.1:5001";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // Preserve the existing /api/enquiries contract and Express/MongoDB backend.
    return [{ source: "/api/:path*", destination: `${apiTarget}/api/:path*` }];
  }
};

export default nextConfig;
