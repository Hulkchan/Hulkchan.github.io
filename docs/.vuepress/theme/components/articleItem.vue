<template>
  <div class="article-item">
      <div>
        <div class="article-item-date">{{ article.frontmatter.date }}</div>
        <div class="article-item-info">
          <h2 class="article-item-title" :title="article.title">
            <router-link :to="article.path" class="article-item-a">
              {{ article.title }}
            </router-link>
          </h2>
          <div class="article-item-tags">
            <span v-for="(tag, index) in article.frontmatter.tags">
              <span>/</span> 
              <router-link class="tag-name" :to="`/tags/${tag}`">{{ tag }}</router-link>
              <span v-if="index === article.frontmatter.tags.length - 1">/</span>
            </span>
          </div>
        </div>
        <div class="article-item-excerpt" v-if="article.excerpt">
          {{ filterExcerpt }}
        </div>
      </div>
    
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
  computed: {
    filterExcerpt() {
      let excerpt = this.article.excerpt.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
      excerpt = excerpt.replace(/[|]*\n/, '') //去除行尾空格
      excerpt = excerpt.replace(/&npsp;/ig, ''); //去掉npsp
      return excerpt;
    }
  },
  mounted() {

  },
}

</script>
<style lang='scss' scoped='scoped'>
.article-item{
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
  @media screen and (max-width:767px){ 
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
  &:hover .article-item-a{
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