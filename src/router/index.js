  import head from '../components/head';
  import Hello from '../components/Hello';
  import food from '../components/food/food';
  import good from '../components/food/good';
  import cart from '../components/table/cart';
  import seller from '../components/table/seller';
  import echarts from '../components/echarts/echarts';
  import opinion from '../components/echarts/opinion';
  import baseform from '../components/baseform/baseform';
  import steps from '../components/steps/steps';
  import steps2 from '../components/steps/steps2';
  const routes = [
    {
      path: '/',
      redirect: '/head',
      name: '',
      hidden: true
    },
    {
      path: '/head',
      component: head,
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
          { path: '/food', component: food, name: '用户列表' },
          { path: '/good', component: good, name: '数据' }
      ]
    },
    {
      path: '/',
      component: Hello,
      name: '表单',
      iconCls: 'el-icon-message',
      children: [
          { path: '/baseform', component: baseform, name: '基本表单' }
      ]
    },
    {
      path: '/',
      component: Hello,
      name: '订单中心',
      iconCls: 'el-icon-message',
      children: [
          { path: '/cart', component: cart, name: '购物车' },
          { path: '/seller', component: seller, name: 'vuex' }
      ]
    },
    {
        path: '/',
        component: Hello,
        name: '订单统计',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', name: '柱状图', component: echarts },
            { path: '/opinion', name: '意见', component: opinion }
        ]
    },
    {
        path: '/',
        component: Hello,
        name: '活动管理',
        iconCls: 'fa fa-address-card',
        leaf: true,
        children:[
          { path: 'steps', component: steps, name: '导航三' },
          { path: 'steps2', component: steps2, name: '导航55三' }
      ]
    }
  ];
  export default routes;