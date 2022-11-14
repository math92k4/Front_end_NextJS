/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],

    // The default values
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    imageSizes: [],
    deviceSizes: [400, 500, 600, 700],
    // the 2 arrays will be concatinated anyway,
    // and deviceSizes enables that we can use vw.
    // Therefore i think it's easier to just use "deviceSizes" - even though Next will throw a warning
  },
};

module.exports = nextConfig;
