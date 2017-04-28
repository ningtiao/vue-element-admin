<template>
  <div id="app">
      <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
 export default {
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
         this.seller = response.data;
         console.log(this.seller);
      }
    });
  }
 };
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"
#app
  .tab
   display: flex
   width: 100%
   height:40px
   line-height: 40px
   border-1px(rgba(7, 17, 27, 0.1))
   .tab-item
    flex:1
    text-align:center
    & > a
     display:block
     color:rgb(77,85,93)
     font-size:14px
    & .active
      color:#f01414
</style>  
