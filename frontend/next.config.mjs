/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'highlightly.net',
                port: '',
                pathname: '/soccer/**',
            },
        ],
    },
};

export default nextConfig;
