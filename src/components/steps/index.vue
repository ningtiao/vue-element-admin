<template>
  <div>
    <el-steps :space="300" :active="active" finish-status="success" class="steps-werpper">
      <el-step title="步骤 1" ></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <transition name="fade">
      <router-view class="view"></router-view>
    </transition>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .steps-werpper
    text-align: center
</style>