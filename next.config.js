/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "images.ctfassets.net",
            },
          ],
    },
    turbopack: {
        resolveAlias: {
            // for react-pdf
            canvas: './app/lib/empty-module.ts',
        },
    },
}

module.exports = nextConfig
