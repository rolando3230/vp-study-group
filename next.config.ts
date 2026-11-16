import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The browser sometimes opens /en (left over from another local project).
  // This site has one language, so send any /en URL to the homepage.
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: false },
      { source: "/en/:path*", destination: "/:path*", permanent: false },
    ];
  },
};

export default nextConfig;
