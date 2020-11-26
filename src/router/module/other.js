/*
 * @Author: 彭璟
 * @Date: 2020-11-24 16:42:51
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-26 10:45:43
 * @Description: file content
 */
export default [
  {
    path: '/watch',
    name: 'watch',
    component: () => import(/* webpackChunkName: "other" */ '@/views/watch'),
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import(/* webpackChunkName: "computed" */ '@/views/computed'),
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import(/* webpackChunkName: "reactive" */ '@/views/reactive'),
  },
  {
    path: '/lifeCycle',
    name: 'lifeCycle',
    component: () => import(/* webpackChunkName: "lifeCycle" */ '@/views/lifeCycle'),
  },
  {
    path: '/composable',
    name: 'composable',
    component: () => import(/* webpackChunkName: "composable" */ '@/views/composable'),
  },
  {
    path: '/vModel',
    name: 'vModel',
    component: () => import(/* webpackChunkName: "vModel" */ '@/views/vModel'),
  },

]