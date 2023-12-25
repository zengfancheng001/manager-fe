<script setup lang="ts"></script>

<template>
  <div class="app">
    <h2>App</h2>
    <router-link to="/main">主页</router-link>
    <router-link to="/login">登录</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
