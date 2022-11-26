const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: false,
  images: {
    loader: "akamai",
    unoptimized: true,
    path: "/web"
  },
  basePath: "/web",
  assetPrefix: "/web"
};
