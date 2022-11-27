const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = ''
let imagePath = ""
let backendUrl = ""

if (isGithubActions) {
  assetPrefix = "/web"
  basePath = "/web"
  imagePath = "/web"

  backendUrl = "/web"
}

module.exports = {
  'process.env.BACKEND_URL': backendUrl,
  reactStrictMode: false,
  images: {
    path: imagePath
  },
  basePath: basePath,
  assetPrefix: assetPrefix
};
