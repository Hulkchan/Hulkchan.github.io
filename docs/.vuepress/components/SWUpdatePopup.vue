<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div
      v-if="enabled"
      class="my-sw-update-popup"
    >
      <span class="popup-title">{{ message }}</span><br><br>
      <button @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
  components: { SWUpdatePopup }
}
</script>

<style>
.my-sw-update-popup {
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: #fff;
  font-size: 20px;
  padding: 10px;
  border: 1px solid #4d4d4d;
  border-radius: 4px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
}

.my-sw-update-popup button {
  font-size: 14px;
  background: #ce2323;
  color: #fff;
  outline: none;
  border: none;
  padding: 1px 8px;
  border-radius: 4px;
}

.popup-title{
  font-size: 18px;
}
</style>