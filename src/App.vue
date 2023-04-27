<template>
  <h1>app</h1>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/login">login</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import '@/assets/styles/reset.scss';
@import '@/assets/styles/iconfont.scss';
@import '@/assets/styles/common.scss';
</style>
