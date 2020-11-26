<!--
 * @Author: 彭璟
 * @Date: 2020-11-24 10:38:50
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-24 14:58:30
 * @Description: file content
-->
<template>
  <div>
    <div>子组件：我是{{ name }}</div>
    <van-button type="primary" size="small" @click="changeName">子组件按钮，点击可改变父组件的文字</van-button>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
  },
  setup(props, { emit }) {
    console.log(props.name)
    console.log(emit)
    const changeName = () => {
      const name = props.name === '张飞' ? '关羽' : '张飞'
      emit('change-name', name)
    }
    return {
      changeName,
    }
  },
}
</script>