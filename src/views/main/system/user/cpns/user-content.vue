<template>
  <div class="content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="usersList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="40px" />
        <el-table-column align="center" type="index" label="序号" width="60px" />
        <el-table-column align="center" label="用户名" prop="name" width="130px" />
        <el-table-column align="center" label="真实姓名" prop="realname" width="130px" />
        <el-table-column align="center" label="手机号码" prop="cellphone" width="130px" />
        <el-table-column align="center" label="状态" prop="enable" width="80px">
          <!-- 作用域插槽 scope可以取到数据-->
          <template #default="scope">
            <el-button size="small" :type="scope.row.enable ? 'primary' : 'danger'" plain>
              {{ scope.row.enable ? '启用' : '禁用' }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" label="创建时间" prop="createAt">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="更新时间" prop="updateAt">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="150px">
          <el-button size="small" icon="Edit" type="primary" text> 编辑 </el-button>
          <el-button size="small" icon="Delete" type="danger" text> 删除 </el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">分页</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/main/system/system'
import { formatUTC } from '@/utils/format'

// 发起action，请求usersList的数据
const systemStore = useSystemStore()
systemStore.usersListAction()

// 2.获取usersList数据,进行展示
const { usersList } = storeToRefs(systemStore)
</script>

<style lang="less" scoped>
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
  .title {
    font-size: 22px;
  }
}
.table {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }
  .el-button {
    margin-left: 0;
    padding: 5px 8px;
  }
}
</style>
