  import login from '../components/login';
  import Hello from '../components/Hello';
  import table from '../components/food/table';
  import good from '../components/food/good';
  import cart from '../components/table/cart';
  import seller from '../components/table/seller';
  import home from '../components/home';
  import echarts from '../components/echarts/echarts';
  import opinion from '../components/echarts/opinion';
  import baseform from '../components/baseform/baseform';
  import steps from '../components/steps/steps';
  import steps2 from '../components/steps/steps2';
  import upload from '../components/upload/upload';
  const routes = [
    {
      path: '/',
      redirect: '/login',
      name: '',
      hidden: true
    },
    {
      path: '/login',
      component: login,
      name: '',
      hidden: true
    },
    {
      path: '/home',
      component: home,
      name: '',
      hidden: true
    },
    {
      path: '/Hello',
      component: Hello,
      name: '',
      hidden: true
    },
    {
      path: '/',
      component: Hello,
      name: '用户管理',
      iconCls: 'el-icon-message',
      children: [
          { path: '/table', component: table, name: '用户列表' },
          { path: '/good', component: good, name: '数据' }
      ]
    },
    {
      path: '/',
      component: Hello,
      name: '表单',
      iconCls: 'el-icon-document',
      children: [
          { path: '/baseform', component: baseform, name: '基本表单' }
      ]
    },
    {
      path: '/',
      component: Hello,
      name: '订单中心',
      iconCls: 'el-icon-warning',
      children: [
          { path: '/cart', component: cart, name: '购物车' },
          { path: '/seller', component: seller, name: 'vuex' }
      ]
    },
    {
        path: '/',
        component: Hello,
        name: '订单统计',
        iconCls: 'el-icon-star-on',
        children: [
            { path: '/echarts', name: '柱状图', component: echarts },
            { path: '/opinion', name: '子父组件通信', component: opinion }
        ]
    },
    {
        path: '/',
        component: Hello,
        name: '活动管理',
        iconCls: 'el-icon-edit',
        leaf: true,
        children:[
          { path: 'steps', component: steps, name: '导航三' },
          { path: 'steps2', component: steps2, name: '导航55三' }
      ]
    },
    {
        path: '/',
        component: Hello,
        name: '文件上传',
        iconCls: 'el-icon-upload',
        children: [
            { path: '/upload', name: '图片上传', component: upload },
        ]
    },
  ];
  export default routes;