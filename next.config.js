/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Fixes npm packages that depend on `aws-crt` module
            config.resolve.fallback = {
                ...config.resolve.fallback,
                'aws-crt': false,
            };
        }
        return config;
    },
}

module.exports = nextConfig
