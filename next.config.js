/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "",
    },
    basePath: "/defi-nft-marketplace-mumbai",
    assetPrefix: "/defi-nft-marketplace-mumbai",
}

module.exports = nextConfig
