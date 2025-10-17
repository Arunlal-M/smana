import type { NextConfig } from "next";

const nextConfig: NextConfig = {
basePath: '/app2',
  assetPrefix: '/app2/', // ensures static files load correctly
};

export default nextConfig;
