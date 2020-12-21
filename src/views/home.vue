<!--
 * @Author: 彭璟
 * @Date: 2020-11-16 14:46:08
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-12-03 10:06:53
 * @Description: file content
-->

<template>
  <div>
    我是首页
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    console.log('NODE_ENV:', process.env.NODE_ENV)
    const store = useStore()
    console.log(store.state)
    const router = useRouter()
    const pageJump = (name) => {
      router.push({ name })
    }
    const toLifeCycle = () => {
      router.push({
        path: '/lifeCycle',
        query: {
          name: '曹操',
          age: 30,
        },
      })
    }
    return {
      pageJump,
      toLifeCycle,
    }
  },
}
</script>