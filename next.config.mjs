/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**', // Esto permite cualquier hostname con HTTPS
          },
        ],
      },
};

export default nextConfig;
