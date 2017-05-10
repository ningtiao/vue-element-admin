<template>
    <div class="shop-list">
        <h3>商品信息</h3>
        <el-table :data="foods" border style="width: 100%">
          <el-table-column prop="id" label="ID" sortable width="100"></el-table-column>
          <el-table-column prop="name" label="菜品名称"></el-table-column>
           <el-table-column prop="price" label="菜品价格" width="120" sortable></el-table-column>
          <el-table-column inline-template  label="操作" width="200">
          <div class="cartcontrol-wrapper">
              <cartcontrol :foods="foods"></cartcontrol>
          </div>
          </el-table-column>
        </el-table>
        <shopcart :delivery-price="seller" :min-price="seller"></shopcart>
    </div>
</template>
<script type="text/ecmascript-6">
  import { mapState, GET_DATA } from 'vuex';
  import shopcart from '../../components/shopcart/shopcart';
  import cartcontrol from '../../components/cartcontrol/cartcontrol';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        foos: []
      }
    },
  	computed: mapState({
    foods: state => state.foods
    }),
   components: {
    shopcart,
    cartcontrol
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .title
    color: #FF4949
</style>