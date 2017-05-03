<template>
  <div class="home">
    <div class="crumbs">
      <el-breadcrumb separator="/">
          <el-breadcrumb-item><i class="el-icon-date"></i> 组件</el-breadcrumb-item>
          <el-breadcrumb-item>父组件</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <good v-on:listen="addChid" :options="options"></good>
  </div>
</template>
<script type="text/ecmascript-6">
  import good from '../../components/food/good';
  export default {
    data() {
      return {
        options: [{
            value: '0',
            label: '请选择'
          },{
            value: '1',
            label: '同意'
          },{
            value: '2',
            label: '不同意'
        }]
      }
    },
    components: {
      good
    },
    methods: {
      addChid(data) {
        console.log(data)
      },
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.title
  font-size: 16px
  color:#1F2D3D
</style>