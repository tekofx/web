const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = ''
let imagePath = ""

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = "web"

  assetPrefix = `/${repo}/`
  basePath = `/${repo}/`
  imagePath = `/${repo}/`
}

module.exports = {
  reactStrictMode: false,
  images: {
    path: imagePath
  },
  basePath: basePath,
  assetPrefix: assetPrefix
};
