<template>
  <header class='nav-header'>
    <div class="header-container">
      <router-link to="/">
        <img src="../assets/images/logo1.png" alt="戒晨" class="logo-image">
      </router-link>
      <nav class="header-nav">
        <router-link to="/tags/" class="header-nav-item">标签</router-link>
        <router-link to="/dataCategories/" class="header-nav-item">时间收集</router-link>
        <router-link to="/about/" class="header-nav-item">关于我</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavHeader',
  data() {
    return {}
  }
}

</script>
<style lang='scss' scoped='scoped'>
.logo-image{
  height: 40px;
}
.header-container{
  width: 800px;
  margin: 0 auto;
  padding: 20px 0;
  @media screen and (max-width:767px){ 
    width: 100%;
    text-align: center;
  }
}

.header-nav{
  margin: 10px 0;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  a{
    color: #0070e0;
  }
}

.header-nav-item{
  margin-right: 10px;
}
</style>