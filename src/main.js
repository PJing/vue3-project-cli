    
/*
 * @Author: 彭璟
 * @Date: 2020-11-16 10:50:01
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-12-03 14:21:26
 * @Description: file content
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'

import http from '@/utils/http'

import store from '@/store'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(store)
app.config.globalProperties.$http = http

app.mount('#app')