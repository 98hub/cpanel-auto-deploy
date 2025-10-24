import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
};

if (isProd) {
  process.env.NEXT_USE_TURBOPACK = "0";
  console.log("🧱 Using Webpack (Turbopack disabled for production build)");
} else {
  process.env.NEXT_USE_TURBOPACK = "1";
  console.log("⚡ Using Turbopack for faster dev builds");
}

export default nextConfig;
