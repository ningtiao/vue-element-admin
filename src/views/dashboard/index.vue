<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{name}}</div>
    <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>

    <section class="app-main" style="min-height: 100%;">
    <div class="dashboard-container">
      <div class="dashboard-editor-container">
      <div  class=" clearfix">
        <div class="info-container">
        <span style="font-size: 20px; display: inline-block;">欢迎来到学客教育平台管理系统</span>
        </div>
      </div> 
      <div>
        <img  src="https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3" class="emptyGif" />
      </div>
      </div>
    </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    padding:30px;
    background:#e3e3e3;
    .emptyGif{
      display: block;
      width: 45%;
      margin: 0 auto;
    }
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
