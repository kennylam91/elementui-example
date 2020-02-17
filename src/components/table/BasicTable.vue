<template>
  <div>
    <h2>Basic Table</h2>
    <el-table
      :data="tableData" border
      :row-class-name="tableRowClassName">
      <el-table-column prop="date" label="Date" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
      <el-table-column prop="address" label="Address" width="300"></el-table-column>
    </el-table>
    <br/>
    <el-table :data="tableData" border stripe>
      <el-table-column v-for="col in columns"
        :prop="col.prop"
        :key="col.prop"
        :label="col.prop|capitalize"
        :width="col.width">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'BasicTable',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]
    }
  },
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex & 1) {
        return 'odd-row'
      } else {
        return 'even-row'
      }
    }
  },
  computed: {
    columns () {
      return Object.keys(this.tableData[0]).map(prop => {
        if (prop !== 'address') {
          return {prop, width: 180}
        } else {
          return {prop, width: 250}
        }
      })
    }
  },
  filters: {
    capitalize (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .el-table {
    width: 100%
  }
  .el-table .odd-row {
    background: #67C23A!important;
  }
  .even-row {
    background: #F56C6C!important
  }
</style>
