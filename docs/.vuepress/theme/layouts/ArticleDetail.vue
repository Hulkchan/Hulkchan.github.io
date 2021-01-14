<template>
  <section class='articleDetail-layout'>
    <NavHeader></NavHeader>
    <div class="container-mine">
      <h2 class="articleDetail-title">
        <span class="articleTitle-son">{{ this.$frontmatter.title || '' }}</span>
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
      <Valine></Valine>
    </div>
  </section>
</template>

<script>
import NavHeader from '../components/nav-header'
import Valine from '../components/comments'

export default {
  name: 'ArticleDetailLayout',
  components: {
    NavHeader,
    Valine
  },
  data() {
    return {}
  },
  computed: {

  },
  mounted() {

  },
}

</script>
<style lang='scss' scoped='scoped'>
.articleDetail-title{
  font-size: 55px;
  margin-bottom: 50px;
  margin-top: 0;
  @media screen and (max-width:767px){ 
    font-size: 40px;
    text-align: center;
  }
  .articleTitle-son{
    @media screen and (max-width:767px){ 
      display: inline-block;
      text-align: left;
    }
  }
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