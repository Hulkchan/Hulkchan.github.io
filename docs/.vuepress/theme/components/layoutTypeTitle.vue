<template>
  <div class="layoutType-title">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'LayoutTypeTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}

</script>
<style lang='scss' scoped='scoped'>
.layoutType-title{
  font-size: 50px;
  font-weight: 800;
  margin-bottom: 20px;
}
</style>