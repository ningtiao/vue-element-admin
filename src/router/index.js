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
    meta: { title: '系统管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '表格', icon: 'table' }
      },
      {
        path: 'fullcalendar',
        name: 'Fullcalendar',
        component: () => import('@/views/fullcalendar/fullcalendar'),
        meta: { title: '日历', icon: 'tree' }
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
        path: 'index',
        name: 'tab',
        component: () => import('@/views/tab/index'),
        meta: { title: 'tab选项卡', icon: 'form' }
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
      title: '表单',
      icon: 'form'
    },
    children: [
      {
        path: 'Form',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'form表单', icon: 'form' }
      },
      {
        path: 'quillEditor',
        name: 'quillEditor',
        component: () => import('@/views/form/quillEditor'),
        meta: { title: 'quillEditor', icon: 'form' }
      },
      {
        path: 'tinymce',
        name: 'tinymce',
        component: () => import('@/views/form/tinymce'),
        meta: { title: 'tinymce', icon: 'form' }
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
    name: '图标',
    meta: { roles: ['admin'] },
    children: [
      {
        path: 'index',
        name: '图标',
        component: () => import('@/views/svg-icon/index'),
        meta: { title: '图标', icon: 'form', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/tree',
    component: Layout,
    name: 'Tree',
    meta: { roles: ['admin'] },
    children: [
      {
        path: 'index',
        name: '图标',
        component: () => import('@/views/tree/index'),
        meta: { title: '树形菜单', icon: 'tree' }
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
      title: '组件',
      icon: 'component'
    },
    children: [
      {
        path: 'componentsmixin',
        name: 'mixin',
        component: () => import('@/views/components/backToTop'),
        meta: { title: '返回顶部' }
      },
      {
        path: 'mixin',
        name: 'componentMixin',
        component: () => import('@/views/components/mixin'),
        meta: { title: 'componentMixin' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
