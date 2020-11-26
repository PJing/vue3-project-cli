<!--
 * @Author: 彭璟
 * @Date: 2020-11-24 15:02:04
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-24 15:50:50
 * @Description: file content
-->
<template>
  <div>子组件，我是{{ name }}</div>
  <van-button type="primary" size="small" @click="changeName(name == '曹操' ? '刘备' : '曹操')">子组件按钮，点击可改变父组件的文字</van-button>
</template>
<script>
import { inject } from 'vue'
export default {
  setup() {
    // inject 函数有两个参数：
    // 1,要注入的 property 的名称
    // 2,一个默认的值 (可选)
    const name = inject('name2', '刘备')
    const changeName = inject('changeName2')
    return {
      name,
      changeName,
    }
  },
}
</script>