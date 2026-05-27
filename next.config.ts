import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/projetos/stockmaster-pro",
        destination: "/projetos/stockmaster",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
