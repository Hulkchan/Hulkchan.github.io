<template>
  <section class='tags-layout'>
    <NavHeader></NavHeader>
    <div class="container-mine">
      <layoutTypeTitle :title="$page.frontmatter.title"></layoutTypeTitle>
      <div class="tags-wrap">
        <div class="tag-item" v-for="(tag, index) in tagList" :key="index">
          <router-link :to="tag.path" class="tag-item--text">
            {{ tag.name.toUpperCase() }}
          </router-link>
          <div class="cutoffline"></div>
          <div class="tag-item--num">
            {{ tag.pages.length }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavHeader from '../components/nav-header'
import layoutTypeTitle from '../components/layoutTypeTitle'

export default {
  name: 'TagsLayout',
  components: {
    NavHeader,
    layoutTypeTitle
  },
  data() {
    return {}
  },
  computed: {
    tagList() {
      return this.$tags.list
    }
  }
}

</script>
<style lang='scss' scoped='scoped'>
.tag-item{
  position: relative;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cutoffline{
  flex: 1;
  border-top: 1px dashed #8c9196;
}

.tag-item--text{
  color: #4d4d4d;
  display: block;
  font-size: 20px;
  padding-right: 20px;
  &:hover{
    color: #ce2323;
  }
}

.tag-item--num{
  padding-left: 20px;
}


</style>