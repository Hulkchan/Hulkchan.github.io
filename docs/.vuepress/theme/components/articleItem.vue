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
              <router-link class="tag-name" :to="`/tags/${tag}`">{{ tag }}</router-link>
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
  @media screen and (max-width:767px){ 
    border-bottom: 1px solid #eee;
    margin-bottom: 14px;
    &:last-child{
      border: none;
    }
  }
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
    @media screen and (max-width:767px){ 
      color:#4d4d4d;
    }
  }
  @media screen and (max-width:767px) {
    width: 100%;
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
  @media screen and (max-width:767px){ 
    display: block;
  }
}

.article-item-tags{
  @media screen and (max-width:767px){ 
    font-size: 14px;
    margin-top: 10px;
    color: #666;
    background: #8c9196;
    display: inline-block;
    color: #fff;
    padding: 1px 8px;
    border-radius: 3px;
  }
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
  @media screen and (max-width:767px){ 
    display: none;
  }
}
.tag-name{
  color: #4d4d4d;
  &:hover{
    color: #ce2323;
    @media screen and (max-width:767px){ 
      color:#4d4d4d;
    }
  }
  @media screen and (max-width:767px){ 
    color: #fff;
  }
}
</style>