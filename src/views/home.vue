<!--
 * @Author: 彭璟
 * @Date: 2020-11-16 14:46:08
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-26 18:17:48
 * @Description: file content
-->

<template>
  <div>
    <van-cell-group>
      <van-cell title="列表页" @click="pageJump('list')" is-link />
      <van-cell title="reactive,ref" @click="pageJump('reactive')" is-link />
      <van-cell title="父子组件传值" @click="pageJump('parent')" is-link />
      <van-cell title="watch监听" @click="pageJump('watch')" is-link />
      <van-cell title="computed" @click="pageJump('computed')" is-link />
      <van-cell title="生命周期" @click="toLifeCycle" is-link />
      <van-cell title="自定义v-model" @click="pageJump('vModel')" is-link />
      <van-cell title="组合式api使用" @click="pageJump('composable')" is-link />
    </van-cell-group>
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