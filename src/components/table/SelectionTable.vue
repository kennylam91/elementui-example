<template>
  <div>
  <el-table
    ref="multipleTable"
    :data="tableData"
    style="width: 100%"
    :cell-style="cellStyle"
    @cell-mouse-enter="handleCellMouseEnter"
    @cell-mouse-leave="handleCellMouseLeave"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="Date"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="Address"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">Toggle selection status of second and third rows</el-button>
    <el-button @click="toggleSelection()">Clear selection</el-button>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hoveredRow: null,
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    cellStyle (cell) {
      if (cell.columnIndex === 0 && cell.row !== this.hoveredRow &&
        !this.multipleSelection.includes(cell.row)) {
        return 'opacity: 0'
      } else {
        return 'opacity: 1'
      }
    },
    handleCellMouseEnter (row, column, cell, event) {
      this.hoveredRow = row
    },
    handleCellMouseLeave (row, column, cell, event) {
      this.hoveredRow = null
    }
  }
}
</script>
<style>
/* .el-table__row .el-checkbox {
    display: none!important
}
.el-table__row .is-checked {
  display:block!important
}
thead .el-checkbox__input {
    display: none!important
}
thead .is-indeterminate {
    display:block!important
}
.el-table__row:hover .el-checkbox {
  display: block!important
}  */
</style>
