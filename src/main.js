/*
 * @Author: 彭璟
 * @Date: 2020-11-16 10:50:01
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-26 18:22:47
 * @Description: file content
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'

import Vant from 'vant'
import 'vant/lib/index.css'

import http from '@/utils/http'

import store from '@/store'
import 'amfe-flexible'

const app = createApp(App)


app.use(router)
app.use(Vant)
app.use(store)
app.config.globalProperties.$http = http

app.mount('#app')