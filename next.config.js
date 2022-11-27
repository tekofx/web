const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''
let imagePath = ""
process.env.FAVICON = ""

if (isGithubActions) {
  assetPrefix = "/web"
  basePath = "/web"
  imagePath = "/web"
  process.env.FAVICON = "/web"

}

module.exports = {
  reactStrictMode: false,
  images: {
    path: imagePath
  },
  basePath: basePath,
  assetPrefix: assetPrefix,

};
