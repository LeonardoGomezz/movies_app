import { config } from "dotenv";
import path from "path";
import type { NextConfig } from "next";

const envPath = path.resolve(
  process.cwd(),
  process.env.NODE_ENV === "production"
    ? "envs/production.env"
    : "envs/development.env"
);
config({ path: envPath });

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
