<!--
 * @Author: 彭璟
 * @Date: 2020-11-24 16:43:15
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-25 11:04:05
 * @Description: file content
-->
<template>
  <van-nav-bar title="watch" left-arrow @click-left="$router.back()" />
  <div>主公：{{ name }}</div>
  <van-divider />
  <ul>
    <li v-for="item in list" :key="item">{{ item }}，</li>
  </ul>
  <van-button type="success" @click="addStrongMan">添加武将</van-button>
  <van-button type="primary" @click="changeMonster">换主公</van-button>
</template>
<script>
import { reactive, ref, toRefs, watch } from 'vue'
export default {
  setup() {
    const state = reactive({
      list: ['关羽', '张飞', '马超', '赵云'],
    })
    const name = ref('刘备')

    watch(
      () => state.list, // 直接使用state.list 会使newval和oldval的值相同
      (newVal, oldVal) => {
        console.log(oldVal)
      }
    )

    watch(name, (newVal, oldVal) => {
      console.log({ newVal, oldVal })
    })

    // 加武将
    const addStrongMan = () => {
      // state.list.push('猪八戒')  // （直接push watch无法监听到变化）
      state.list = [...state.list, '猪八戒']
    }

    // 换主公
    const changeMonster = () => {
      name.value = '旺财'
    }

    // 侦听多个源
    // 侦听器还可以使用数组同时侦听多个源：
    // watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
    //   /* ... */
    // })

    return {
      addStrongMan,
      changeMonster,
      name,
      ...toRefs(state),
    }
  },
}
</script>