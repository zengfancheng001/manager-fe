<template>
  <div class="user">
    <user-search />
    <user-content />
  </div>
</template>

<script setup lang="ts">
import userSearch from './cpns/user-search.vue'
import userContent from './cpns/user-content.vue'
</script>

<style lang="less" scoped>
.user {
  border-radius: 4px;
  overflow: hidden;
}
</style>
