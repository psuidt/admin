<template>
  <div class="param-rules">
       <el-table  :data="rules" border fit highlight-current-row style="width: 100%;">
            <el-table-column align="center" label="Param" width="150">
                <template slot-scope="scope">
                <span>{{scope.row.param}}</span>
                </template>
            </el-table-column>
            <el-table-column width="400" align="center" label="Rule">
                <template slot-scope="scope">
                <span>{{scope.row.rule}}</span>
                </template>
            </el-table-column>
            <el-table-column width="250" align="center" label="Test Data" >
                <template slot-scope="scope">
                    <span>{{scope.row.test_data}}</span>
                </template>
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'paramRules',
  props: {
      rules : {
        type: Array,
        default: []
      }
  },
  components: {},
  data() {
      return {
      }
  },
  methods: {
  },
  created() {

  },
  mounted() {
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  }
}
</script>

