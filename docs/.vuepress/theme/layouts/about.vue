<template>
  <section class='about-layout'>
    <NavHeader></NavHeader>
    <div class="container">
      <layoutTypeTitle :title="$page.frontmatter.title"></layoutTypeTitle>
      <div class="typer-wrap">
        <typer :texts="theme.typer"></typer>
      </div>
      <div class="about-user-info">
        <div class="email">邮箱：chenqihulk@163.com - </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavHeader from '../components/nav-header'
import layoutTypeTitle from '../components/layoutTypeTitle'
import typer from '../components/typer'

export default {
  name: 'AboutLayout',
  components: {
    NavHeader,
    layoutTypeTitle,
    typer
  },
  data() {
    return {}
  },
  computed: {
    theme() {
      return this.$site.themeConfig
    }
  }
}

</script>
<style lang='scss' scoped='scoped'>
.typer-wrap{
  background-color: #666;
  color: #fff;
  padding-left: 20px;
  font-size: 28px;
}

.about-user-info{
  margin-top: 20px;
}
</style>