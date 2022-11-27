const supportedLngs = ["en", "es"];
const isGithubActions = process.env.GITHUB_ACTIONS || false

let localePath = '/locales/{{lng}}/{{ns}}.json'

if (isGithubActions) {
  localePath = '/web/locales/{{lng}}/{{ns}}.json'


}

export const ni18nConfig = {
  supportedLngs,
  ns: ["home"],
  backend: {
    loadPath:
      localePath,
  },
};
