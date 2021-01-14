<template>
  <section class='comments'>
    <!-- id 将作为查询条件 -->
    <!-- <span class="leancloud-visitors"
          data-flag-title="Your Article Title">
      <em class="post-meta-item-text">阅读量： </em>
      <i class="leancloud-visitors-count"></i>
    </span> -->
    <div id="vcomments"></div>
  </section>
</template>

<script>
export default {
  name: 'ValineComments',
  data() {
    return {}
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = import('leancloud-storage')
    }
    const Valine = import('valine')
    this.valine = new Valine()
    this.initValine()
  },
  methods: {
    initValine () {
      let path = location.origin + location.pathname
      // // vuepress打包后变成的HTML不知为什么吞掉此处的绑定`:id="countId"`
      // document.getElementsByClassName('leancloud-visitors')[0].id = path
      this.valine.init({
          el: '#vcomments',
          appId: 'JK4pcU4RnUALt6vCfN9d78Nc-gzGzoHsz',// your appId
          appKey: '0K3vMHBYVk5TdbGN96Xf9gXF', // your appKey
          notify: false,
          verify: false,
          path: path,
          visitor: true,
          avatar: 'mm',
          placeholder: '客官您指点两句呗~'
      });
    }
  },
  watch: {
    $route (to, from) {
      if (from.path != to.path) {
        this.initValine()
      }
    }
  }
}

</script>
<style lang='scss' scoped='scoped'>

</style>