<template>
  <div class="main">
    <h2>main</h2>
    <button @click="handleExitClick">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constants'
import { useRouter } from 'vue-router'
import { localCache } from '@/utils/cache'

const router = useRouter()

// 点击退出按钮
function handleExitClick() {
  // 删除token
  localCache.removeCache(LOGIN_TOKEN)
  // 调好login 页面
  router.push('/login')
}
</script>

<style scoped lang="less"></style>
