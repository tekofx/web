const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = ''
let imagePath = ""

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = "web"

  assetPrefix = "https://tekofx.github.io/web/"
  basePath = "https://tekofx.github.io/web"
  imagePath = "https://tekofx.github.io/web/"
}

module.exports = {
  reactStrictMode: false,
  images: {
    path: imagePath
  },
  basePath: basePath,
  assetPrefix: assetPrefix
};
