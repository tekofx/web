const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = ''
let imagePath = ""
let backendUrl = ""

if (isGithubActions) {
  assetPrefix = "/web"
  basePath = "/web"
  imagePath = "/web"

}

module.exports = {
  reactStrictMode: false,
  images: {
    path: imagePath
  },
  basePath: basePath,
  assetPrefix: assetPrefix,

};
