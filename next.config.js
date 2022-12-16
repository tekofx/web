const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''
let imagePath = ""
process.env.FAVICON = ""
process.env.PUBLIC_URL = "/"

if (isGithubActions) {
  assetPrefix = "/web"
  basePath = "/web"
  imagePath = "/web"
  process.env.FAVICON = "/web"
  process.env.PUBLIC_URL = "/web"

}

module.exports = {
  output: 'standalone',
  reactStrictMode: false,
  images: {
    path: imagePath
  },
  basePath: basePath,
  assetPrefix: assetPrefix,
  env: {
    FAVICON: process.env.FAVICON,
    PUBLIC_URL: process.env.PUBLIC_URL
  }

};
