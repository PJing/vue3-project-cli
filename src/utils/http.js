/*
 * @Author: 彭璟
 * @Date: 2020-11-18 11:22:17
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-24 10:41:57
 * @Description: file content
 */

import axios from 'axios'
import { Toast } from 'vant'
import router from '@/router'
import store from '@/store'

// 创建实例
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000,
});

// 请求拦截
http.interceptors.request.use((config) => {
  // 加载动画
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    // loadingType: 'spinner',
  });
  config.headers['token'] = localStorage.getItem('token') || ''
  return config
})

// 添加响应拦截器
http.interceptors.response.use(response => {
  Toast.clear();
  const { data } = response
  if (data.code === 401) {
    Toast.fail(data.msg)
    // token失效，去登录页
    localStorage.removeItem('token')
    store.commit('setUser', {})
    router.push({ name: 'login' })
  }
  return data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default http