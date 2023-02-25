const isGithubActions = process.env.GITHUB_ACTIONS || false
console.log(isGithubActions)

let assetPrefix = ''
let basePath = ''
let imagePath = ""
process.env.FAVICON = "/public/favicon.ico"
process.env.PUBLIC_URL = "/"

if (isGithubActions) {
  assetPrefix = "/web"
  basePath = "/web"
  imagePath = "/web"
  process.env.FAVICON = "/web/public/favicon.ico"
  process.env.PUBLIC_URL = "/web/"

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
