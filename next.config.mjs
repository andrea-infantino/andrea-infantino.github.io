/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: isProd ? '/website/' : '',
    basePath: isProd ? '/website' : '',
    trailingSlash: true,
};

export default nextConfig;
