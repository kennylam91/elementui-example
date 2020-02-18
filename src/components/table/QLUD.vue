<template>
  <div>
      <h3>Quan ly ung dung</h3>
      <div id="searchForm">
        <el-form :model="formSearch" :inline="true"
          ref="formSearch" label-width="80px" style="width: 100%; display: flex"
        >
          <el-form-item label="">
            <el-input maxlength="50"
              v-model="formSearch.appCode"
              placeholder="app code input">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input maxlength="100"
              v-model="formSearch.appName"
              placeholder="app name input">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearchSubmit">
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
      </div>

      <el-table :data="dataTable"
        border stripe
        style="width: 100%;">
        <el-table-column
        label="STT"
        type="index"
        align="center"
        width="50"
        >
        </el-table-column>
        <el-table-column
        label="AppCode"
        align="center"
        width="100"
        >
        <template slot-scope="{row}">
          <span class="link-type">{{ row.appCode }}</span>
        </template>
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
      <Pagination
        @pagination= "handlePagination"
        :total = "total"
      ></Pagination>
    </div>
</template>
<script>
import '@/mock/QLUDMock'
import axios from 'axios'
import Pagination from '@/components/pagination/Pagination'
export default {
  name: 'QLUD',
  components: {Pagination},
  data () {
    return {
      dataTable: [],
      total: null,
      formSearch: {
        appCode: '',
        appName: '',
        pagination: {
          page: 1,
          limit: 10
        }
      }
    }
  },
  methods: {
    onSearchSubmit () {
      // let code = this.formSearch.appCode
      axios.post('/apps/search', this.formSearch)
        .then(res => {
          this.dataTable = res.data.list
          this.total = res.data.total
        })
    },
    handlePagination (pagination) {
      console.log(pagination)
      this.formSearch.pagination = pagination
      this.onSearchSubmit()
    }
  },
  computed: {
  },
  mounted () {
    axios.get('/apps')
      .then(res => {
        console.log(res.data)
        this.dataTable = res.data.list
        this.total = res.data.total
      })
  }
}
</script>
<style scoped>
  .link-type{
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
  }
</style>
