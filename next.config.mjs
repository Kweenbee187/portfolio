import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add all page extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],

  // 🚫 Disable Turbopack completely (fixes slug + hydration + source-map issues)
  experimental: {
    turbo: false,
  },

  // ✅ Force Webpack (fix routing + MDX + Sanity queries)
  webpack: (config) => {
    return config;
  },

  // Allow images from Sanity
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },
};

export default withMDX(nextConfig);
