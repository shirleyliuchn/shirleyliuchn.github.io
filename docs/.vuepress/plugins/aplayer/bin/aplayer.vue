<template>
  <div class="music-player">
    <aplayer 
      ref="aplayer"
      :audio="audio" 
      :lrcType="lrcType" 
      fixed 
      :mini="mini" 
      :autoplay="autoplay" 
      :volume="volume" 
      :listFolded="listFolded" 
      :listMaxHeight="listMaxHeight"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import APlayer from '@moefe/vue-aplayer'
Vue.use(APlayer)
export default {
  mounted () {
    this.$refs.aplayer.hideLrc();
  },
  data () {
    return {
      audio: AUDIO,
      mini: MINI,
      autoplay: AUTOPLAY,
      volume: VOLUME,
      listFolded: LIST_FOLDED,
      listMaxHeight: LIST_MAX_HEIGHT,
      lrcType: LRC_TYPE
    };
  },
};
</script>
<style lang="stylus">
.aplayer.aplayer-fixed .aplayer-info
  border-top 1px solid lighten($accentColor, 50%)
.aplayer .aplayer-miniswitcher
  background lighten($accentColor, 50%)
.aplayer-info
  color lighten($accentColor, 30%)!important
  .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played
    background-color lighten($accentColor, 30%)!important
  .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb
    background-color lighten($accentColor, 30%)!important
.aplayer-author
  color lighten($accentColor, 30%)!important
.aplayer-volume
  background-color lighten($accentColor, 30%)!important
.aplayer-lrc
  color lighten($accentColor, 30%)
.aplayer-icon:hover
  color red
</style>
