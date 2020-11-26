<!--
 * @Author: 彭璟
 * @Date: 2020-11-24 09:51:48
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-24 15:38:30
 * @Description: file content
-->
<template>
  <div>
    <van-nav-bar title="父子组件传值" left-arrow @click-left="$router.back()" />
    <!-- 方式1 -->
    <van-divider>1，props 传值，emit改变触发父组件的事件</van-divider>
    <div>父组件：我是{{ name }}</div>
    <props-emit :name="name" @changeName="changeName" />
    <!-- 方式2 -->
    <van-divider>1，provide在父组件定义，inject在子组件接收</van-divider>
     <div>父组件：我是{{ name2 }}</div>
    <provide-inject />
  </div>
</template>
<script>
import { provide, reactive, ref, toRefs } from 'vue'
import propsEmit from './child/propsEmit'
import provideInject from './child/provideInject'
export default {
  components: {
    propsEmit,
    provideInject,
  },
  setup() {
    // 方式1
    const state = reactive({
      name: '关羽',
    })
    const changeName = (name) => {
      state.name = name
    }

    // 方式2
    const name2 = ref('曹操')
    provide('name2', name2)
    const changeName2 = (name) => {
      name2.value = name
    } 
    provide('changeName2',changeName2)

    return {
      ...toRefs(state),
      changeName,
      name2
    }
  },
}
</script>