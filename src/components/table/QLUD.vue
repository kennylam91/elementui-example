<template>
    <div>
       <h3>Quan ly ung dung</h3>
			 {{data}}
    </div>
</template>
<script>
import { qludData } from '@/mock/QLUDMock'
export default {
  name: 'QLUD',
  data () {
    return {
      data: qludData
    }
  }
}
</script>
<style scoped>

</style>
