/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [  // Corrected from 'remotePattern' to 'remotePatterns'
            {
                protocol: 'https',  // Should be 'protocol' instead of 'protocols'
                hostname: '**',     // Wildcard to allow any domain
            },
        ],
    },
};

export default nextConfig;
