<template>
  <section class='default-layout'>
    <NavHeader></NavHeader>
    <div class="container">
      <ArticleList></ArticleList>
    </div>
  </section>
</template>

<script>
import NavHeader from '../components/nav-header'
import ArticleList from '../components//articleList'

export default {
  name: 'DefaultLayout',
  components: {
    NavHeader,
    ArticleList
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this)
  },
}

</script>
<style lang='scss' scoped='scoped'>

</style>