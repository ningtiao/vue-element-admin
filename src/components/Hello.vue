<template>
  <el-row class="container">
    <el-col :span="24" class="header" theme="dark">
      <el-col :span="10" class="logo">
        <span><img src="./img/logo-sm.png"></span>
      </el-col>
      <el-col :span="10">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4" class="userinfo">
          <el-dropdown  @command="handleCommand">
            <span class="el-dropdown-link">
              杨家馨<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="24" class="main">
          <aside class="menu-expanded">
            <el-menu :default-active="$route.path" theme="dark" class="el-menu-vertical-demo" unique-opened router v-show="!collapsed">
              <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                <el-submenu :index="index+''" v-if="!item.leaf">
                  <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                  <el-menu-item v-for="(child,index) in item.children" :index="child.path" :key="item.id" v-if="!child.hidden">{{child.name}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
              </template>
            </el-menu>
          </aside>
          <div class="content-container">
              <el-col :span="24" class="content-wrapper">
                  <router-view></router-view>
              </el-col>
          </div>
        </el-col>            
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
import food from '../components/food/table';
const ERR_OK = 0;
  export default {
    data() {
      return {
        goods: [],
        listLoading: false,
        collapsed: false,
        sysUserName: '',
        msg: '后台管理',
        sysUserAvatar: '',
        activeIndex: '1',
        activeIndex2: '1'
    }
  },
    methods: {
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      },
      collapse:function(){
        this.collapsed=!this.collapsed;
      },
      showMenu(i,status){
       this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleCommand(command) {
        if(command == 'loginout'){
            localStorage.removeItem('ms_username')
            this.$router.push('/login');
        }
    }
    },
  components: {
    food
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  body
    margin:0
    padding:0
    height:100%
  .container
    position: absolute
    top: 0px
    bottom: 0px
    width: 100%
    .header
      height: 60px
      background:#324057
      color:#fff
      .userinfo
        text-align: right
        padding-right: 35px;
        float: right
        color: #fff
        .userinfo-inner
          cursor: pointer
          color:#fff
        .el-dropdown-link
          color: #fff
          line-height:60px
          cursor:pointer 
      .logo 
        width:230px
        height:60px
        font-size: 22px
        line-height:60px
        padding-left:20px
        padding-right:20px
        border-color: rgba(238,241,146,0.3)
        border-right-width: 1px
        border-right-style: solid
        img
          margin-top:5px
          width:auto
          height:50px
    .main
      display: flex
      position: absolute
      top: 60px
      bottom: 0px
      height:100%
      aside
        flex:0 0 230px
        width: 230px
        height:890px
        .el-menu
          height: 100%;
        collapsed
          width:60px;
          .item
            position: relative;
          .submenu
            position:absolute;
            top:0px;
            left:60px;
            z-index:99999;
            height:auto;
            display:none;        
      .menu-collapsed
        flex:0 0 60px;
        width: 60px;
      .menu-expanded
        flex:0 0 230px;
        width: 230px;
      .content-container
        flex:1
        padding: 20px
        .toolbar
          background: #f2f2f2;
          padding: 10px;
          margin: 10px 0px;
          .el-form-item
            margin-bottom: 10px         
</style>