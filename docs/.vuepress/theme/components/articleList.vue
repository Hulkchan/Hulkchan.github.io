<template>
  <div class='article-list'>
    <ArticleItem
      v-for="article in articleList"
      :article="article"></ArticleItem>
  </div>
</template>

<script>
import ArticleItem from './articleItem'

export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  data() {
    return {}
  },
  computed: {
    articleList() {
      return this.$pagination.pages
    }
  }
}

</script>
<style lang='scss' scoped='scoped'>
.article-list{
  width: 800px;
  margin: 0 auto;
}
</style>