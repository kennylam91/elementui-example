<template>
  <div>
      <h3>Quan ly ung dung</h3>
      <el-form :model="formSearch" :inline="true"
        ref="formSearch" label-width="80px" style="width: 100%; display: flex"
      >
        <el-form-item label="">
          <el-input v-model="formSearch.appCode" placeholder="app code input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formSearch.appName" placeholder="app name input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            <i class="el-icon-search"></i> Search</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">
            <i class="el-icon-edit"></i> Add App</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="secondary" >
            <i class="el-icon-refresh"></i>  Reload page</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="dataTable"
        border stripe
        style="width: 100%;">
        <el-table-column
        label="STT"
        type="index"
        align="center"
        >
        </el-table-column>
        <el-table-column
        property="appCode"
        label="AppCode"
        align="center"
        >
        </el-table-column>
        <el-table-column
          property="appName"
          label="AppName"
          width=""
          align="center"
        >
        </el-table-column>
        <el-table-column
          property="creator"
          label="Creator"
          width=""
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="Actions"
          width=""
          align="center"
        >
        <el-button type="danger" size="small" >Delete</el-button>

        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="currentPage"
        :page-sizes="[20, 40, 80, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalNum" background>
      </el-pagination>
    </div>
</template>
<script>
import '@/mock/QLUDMock'
import axios from 'axios'
export default {
  name: 'QLUD',
  data () {
    return {
      dataTable: null,
      formSearch: {
        appCode: '',
        appName: ''
      }
    }
  },
  mounted () {
    axios.get('data.json')
      .then(res => {
        console.log(res.data.list)
        this.dataTable = res.data.list
      })
  }
}
</script>
<style scoped>

</style>
