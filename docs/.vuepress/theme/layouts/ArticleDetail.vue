<template>
  <section class='articleDetail-layout'>
    <NavHeader></NavHeader>
    <div class="container">
      <h2 class="articleDetail-title">
        {{ this.$frontmatter.title || '' }}
      </h2>
      <Content class="articleDetail"></Content>
      <div class="articleDetail-bottom">
        <div class="articleDetail-tags">
          <router-link 
            class="articleDetail-tags-item"
            v-for="(tag, index) in $frontmatter.tags"
            :to="`/tags/${tag}`"
          >#{{ tag }}</router-link>
        </div>
        <div class="articleDetail-date">{{ $frontmatter.date || '' }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import NavHeader from '../components/nav-header'

export default {
  name: 'ArticleDetailLayout',
  components: {
    NavHeader
  },
  data() {
    return {}
  },
  computed: {

  },
  mounted() {
    console.log(this)
  },
}

</script>
<style lang='scss' scoped='scoped'>
.articleDetail-title{
  font-size: 55px;
  margin-bottom: 50px;
  margin-top: 0;
}

.articleDetail-bottom{
  text-align: right;
  padding: 50px 0 100px;
  border-top: 1px solid #eee;
  margin-top: 100px;
}

.articleDetail-tags-item{
  color: #ce2323;
  margin-left: 10px;
}

.articleDetail-date{
  margin-top: 20px;
}
</style>