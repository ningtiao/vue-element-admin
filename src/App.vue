<template>
  <div id="app" class="fillcontain">
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
<style lang="less">
	@import './style/common';
</style>
