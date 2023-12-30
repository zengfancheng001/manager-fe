<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="240px">
        <main-menu />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main-header />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mainMenu from '@/components/main-menu/main-menu.vue'
import mainHeader from '@/components/main-header/main-header.vue'
</script>

<style scoped lang="less">
.main {
  height: 100%;
}
.main-content {
  height: 100%;
}
.el-aside {
  background-color: palegoldenrod;
}

.el-header {
  background-color: skyblue;
}

.el-main {
  background-color: rgb(219, 210, 210);
}
</style>
