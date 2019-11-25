<template>
  <span
    v-if="valineConfig && valineConfig.visitor != false"
    :id="getIdVal(idVal)"
    class="leancloud-visitors"
    data-flag-title="Your Article Title"
  >
    <i class="iconfont reco-eye" style="margin-right: .5rem"></i>
    <a class="leancloud-visitors-count" :style="numStyle"></a>
  </span>
</template>

<script>
export default {
  props: {
    idVal: {
      type: String,
      default: '/'
    },
    numStyle: {
      type: Object
    },
    valineConfig: {
      type: Object
    },
    baseUrl: {
      type: String
    }
  },
  methods: {
    getIdVal (path) {
      const base = this.baseUrl
      return base.slice(0, base.length - 1) + path
    }
  }
}
</script>

<style lang="stylus" scoped>
.leancloud-visitors
  margin-right .5rem
</style>
