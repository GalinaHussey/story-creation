/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "twzvezxwotyushjmdnss.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/templates/**",
      },
    ],
  },
};

export default nextConfig;
