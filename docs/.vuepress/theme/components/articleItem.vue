<template>
  <div class="article-item">
    <router-link :to="article.path" class="article-item-a">
      <div>
        <div class="article-item-date">{{ article.frontmatter.date }}</div>
        <div class="article-item-info">
          <h2 class="article-item-title" :title="article.title">
            {{ article.title }}
          </h2>
          <div class="article-item-tags">
            <span v-for="(tag, index) in article.frontmatter.tags">
              <span>/</span> 
              <router-link class="tag-name" :to="`tags/${tag}`">{{ tag }}</router-link>
              <span v-if="index === article.frontmatter.tags.length - 1">/</span>
            </span>
          </div>
        </div>
        <div class="article-item-excerpt">
          这是一篇JS基础知识,通过《JS高级程序设计》和《掘金小册》的结合，自己总结的相关文章
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.article)
  },
}

</script>
<style lang='scss' scoped='scoped'>
.article-item{
  margin-bottom: 40px;
}

.article-item-a{
  display: block;
  color: #4d4d4d;
}
.article-item-title{
  width: 32%;
  height: 100%;
  font-size: 2em;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0;
  &:hover{
    color: #ce2323;
  }
}

.article-item-date{
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #637282;
}

.article-item-info{
  display: flex;
  align-items: flex-end;
  margin: 10px 0 20px;
  justify-content: space-between;
}

.article-item-excerpt{
  width: 50%;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #8c9196;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.tag-name{
  color: #4d4d4d;
  &:hover{
    color: #ce2323;
  }
}
</style>