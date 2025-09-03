// next.config.js

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
  },
};

export default nextConfig;
