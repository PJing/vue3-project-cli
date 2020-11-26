/*
 * @Author: 彭璟
 * @Date: 2020-11-23 14:43:34
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-24 10:52:53
 * @Description: file content
 */
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "group-foo" */ '@/views/home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "group-foo" */ '@/views/login')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404')
  },
]