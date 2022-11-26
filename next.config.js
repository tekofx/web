const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: false,
  assetPrefix: isProd ? '/your-github-repo-name/' : '',
  images: {
    unoptimized: true,
  },
};
