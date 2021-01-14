<template>
  <section class='date-layout'>
    <NavHeader></NavHeader>
    <div class="container-mine">
      <layoutTypeTitle :title="$page.frontmatter.title"></layoutTypeTitle>
      <div class="date-wrap">
        <div class="date-item" v-for="(date, index) in $dataCategories.list" :key="index">
          <router-link :to="date.path" class="date-item--text">
            {{ date.name.toUpperCase() }}
          </router-link>
          <div class="cutoffline"></div>
          <div class="date-item--num">
            {{ date.pages.length }}
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
  name: 'DateLayout',
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
  },
  mounted() {

  },
}

</script>
<style lang='scss' scoped='scoped'>
.date-item{
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

.date-item--text{
  color: #4d4d4d;
  display: block;
  font-size: 20px;
  padding-right: 20px;
  &:hover{
    color: #ce2323;
  }
}

.date-item--num{
  padding-left: 20px;
}

</style>