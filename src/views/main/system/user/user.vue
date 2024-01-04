<template>
  <div class="user">
    <user-search @query-click="handleQueryClick" @reset-click="handleResetClick" />
    <user-content ref="contentRef" @new-user-click="handleNewUserBtn" />

    <user-modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import userSearch from './cpns/user-search.vue'
import userContent from './cpns/user-content.vue'
import userModal from './cpns/user-modal.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof userContent>>()
function handleQueryClick(formData: any) {
  contentRef.value?.fetchUserListData(formData)
}
function handleResetClick() {
  console.log('点击了重置')

  contentRef.value?.fetchUserListData()
}

// 对modal组件的
const modalRef = ref<InstanceType<typeof userModal>>()
function handleNewUserBtn() {
  modalRef.value?.setModalVisible()
}
</script>

<style lang="less" scoped>
.user {
  border-radius: 4px;
  overflow: hidden;
}
</style>
