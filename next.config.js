/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    output: 'export',
    assetPrefix: '',
    basePath: '',
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig;
