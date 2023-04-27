<template>
  <div>home</div>
  <router-link to="/sign">sign</router-link>
  <router-link to="/exception">exception</router-link>
  <router-link to="/apply">apply</router-link>
  <router-link to="/check">check</router-link>
  <router-view></router-view>
</template>

<script setup lang="ts">
// import { defineComponent } from 'vue'
// // 手动给组件命名，用于Chrome中vue.js调试工具给组件起名子
// // 可以再eslint中关闭组件命名检测
// defineComponent({
//   name: 'Homes',
// })
</script>

<style scoped lang="scss"></style>
