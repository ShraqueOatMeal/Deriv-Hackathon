/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.licdn.com", "blog-frontend.envato.com"],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
