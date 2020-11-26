/*
 * @Author: 彭璟
 * @Date: 2020-11-24 10:41:35
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-24 10:49:13
 * @Description: file content
 */
export default [
  {
    path:'/parent',
    name: 'parent',
    component: () => import(/* webpackChunkName: "parent" */ '@/views/parentAndChild/parent'),
  }
]