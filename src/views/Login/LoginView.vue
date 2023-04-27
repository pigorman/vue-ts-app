<template>
  <div>login</div>
  <el-button type="info" @click="handelClick">info</el-button>
</template>

<script setup lang="ts">
// import http from '@/utils/http' //测试axios封装
import { useStore } from '@/store' //测试vuex接口处理方案

// 测试axios封装
// const handelClick = () => {
//   http
//     .post('/users/login', {
//       email: 'huangrong@imooc.com', // 登录邮箱
//       pass: 'huangrong', // 登录密码
//     })
//     .then((res) => {
//       console.log(res.data)
//     })
// }

// 架构将axios持久化道vuex中，测试vuex的接口处理方案
const store = useStore()
function handelClick() {
  store
    .dispatch('users/login', {
      email: 'huangrong@imooc.com', // 登录邮箱
      pass: 'huangrong', // 登录密码
    })
    .then((res) => {
      console.log(res.data)
    })
}
</script>

<style scoped lang="scss"></style>
