const { resolve } = require('path')

module.exports = (options, context) => ({
  define () {
    const { audio, mini, autoplay, volume, listFolded, listMaxHeight, lrcType} = options
    return {
      AUDIO: audio || [
        {
          name: '장가갈 수 있을까',
          artist: '咖啡少年',
          url: 'https://assets.smallsunnyfox.com/music/1.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/1.jpg?param=300y300',
        }
      ],
      MINI: mini || true, // 控制播放器展开或收起
      AUTOPLAY: autoplay || true, // 是否开启自动播放
      VOLUME: volume || 0.7, // 设置播放器的音量
      LIST_FOLDED: listFolded || true, // 是否折叠播放列表
      LIST_MAX_HEIGHT: listMaxHeight || 250,
      LRC_TYPE: lrcType || 3
    }
  },
  name: '@vuepress-reco/vuepress-plugin-aplayer',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'APlayer'
})