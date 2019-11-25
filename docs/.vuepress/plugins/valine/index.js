const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: '@vuepress-reco/vuepress-plugin-valine',
  enhanceAppFiles: [
    path.resolve(__dirname, './enhanceAppFile.js')
  ]
})