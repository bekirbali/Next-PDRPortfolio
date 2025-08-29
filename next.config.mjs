/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
      // Production için de ekleyebilirsiniz
      {
        protocol: "https",
        hostname: "your-domain.com", // Kendi domain'inizi ekleyin
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
