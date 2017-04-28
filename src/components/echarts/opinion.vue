<template>
  <div class="home">
    <h1 class="title">父组件内容</h1>
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