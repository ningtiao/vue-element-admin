import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Table', icon: 'table' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'complexTable' }
      },
      {
        path: 'fullcalendar',
        name: 'Fullcalendar',
        component: () => import('@/views/fullcalendar/fullcalendar'),
        meta: { title: 'calendar' }
      }
    ]
  },
  {
    path: '/tab',
    name: 'tab',
    component: Layout,
    meta: { icon: 'example' },
    children: [
      {
        path: 'Tabs',
        name: 'Tabs',
        component: () => import('@/views/tab/index'),
        meta: { title: 'Tabs', icon: 'tab' }
      }
    ]
  },
  // 表单
  {
    path: '/form',
    component: Layout,
    redirect: '/table/BaseForm',
    name: 'form',
    meta: {
      title: 'form',
      icon: 'form'
    },
    children: [
      {
        path: 'Form',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'BaseForm' }
      },
      {
        path: 'qiniu',
        name: 'qiniu',
        component: () => import('@/views/form/qiniu'),
        meta: { title: 'qiniu' }
      },
      {
        path: 'quillEditor',
        name: 'quillEditor',
        component: () => import('@/views/form/quillEditor'),
        meta: { title: 'quillEditor' }
      },
      {
        path: 'tinymce',
        name: 'tinymce',
        component: () => import('@/views/form/tinymce'),
        meta: { title: 'tinymce' }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/icon',
    component: Layout,
    name: 'icons',
    meta: { roles: ['admin'] },
    children: [
      {
        path: 'iconIndex',
        name: 'iconIndex',
        component: () => import('@/views/svg-icon/index'),
        meta: { title: 'svgicons', icon: 'icon', roles: ['admin'] }
      }
    ]
  },
  // 树形组件
  {
    path: '/treeMen',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      title: 'treeMen',
      icon: 'TreeMean'
    },
    children: [
      {
        path: 'treeMen',
        name: 'treeMen-demo',
        component: () => import('@/views/tree/index'),
        meta: { title: 'treeMen', icon: 'TreeMean' }
      }
    ]
  },
  // 组件
  {
    path: '/components',
    component: Layout,
    redirect: '/components/dragKanban',
    name: 'Components',
    meta: {
      title: 'Components',
      icon: 'component'
    },
    children: [
      {
        path: 'componentsmixin',
        name: 'mixin',
        component: () => import('@/views/components/backToTop'),
        meta: { title: 'backToTop' }
      },
      {
        path: 'mixin',
        name: 'componentMixin',
        component: () => import('@/views/components/mixin'),
        meta: { title: 'componentMixin' }
      }
    ]
  },
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/exportExcel',
    name: 'excel',
    meta: {
      title: 'excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'exportExcel',
        name: 'exportExcel',
        component: () => import('@/views/excel/exportExcel'),
        meta: { title: 'exportExcel', icon: 'excel' }
      }
    ]
  },
  {
    path: '/i18n-demo',
    component: Layout,
    redirect: 'i18n-demo',
    children: [
      {
        path: 'indexLang',
        name: 'indexLang',
        component: () => import('@/views/i18n-demo/indexLang'),
        meta: { title: 'i18n', icon: 'international' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
