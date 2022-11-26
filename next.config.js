const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: false,
  assetPrefix: isProd ? "/web/" : "",
  images: {
    unoptimized: true,
  },
};
