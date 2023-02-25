let assetPrefix = ''
let basePath = ''
let imagePath = ""
process.env.FAVICON = "/public/favicon.ico"
process.env.PUBLIC_URL = "/"

if (process.env.GITHUB_WORKFLOW==="Deploy Next.js site to Pages") {
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
