/*
 * @Author: 彭璟
 * @Date: 2020-11-16 11:28:26
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-24 16:45:36
 * @Description: file content
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'

import list from './module/demo'
import global from './module/global'
import parentAndChild from './module/parentAndChild'
import other from './module/other'

const routes = [
  ...global,
  ...list,
  ...parentAndChild,
  ...other,
  // 添加404页面：方法1
  // {
  //   path: '/:catchAll(.*)',
  //   redirect: { name: '404' }
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.savedPosition && savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: routes
})

// 添加404页面：方法2
router.addRoute({
  path: '/:catchAll(.*)',
  redirect: { name: '404' }
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (token) {
    if (to.name == 'login') {
      next('/')
    } else {
      if (store.state.user.user && store.state.user.user.id) {
        next()
      } else {
        store.dispatch('getUser').then(() => {
          console.log(store.state.user.user)
          next()
        })
      }
    }
  } else {
    if (to.meta.needLogin) {
      next('/login')
    } else {
      next()
    }
  }
})


export default router