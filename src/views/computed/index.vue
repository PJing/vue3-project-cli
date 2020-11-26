<!--
 * @Author: 彭璟
 * @Date: 2020-11-25 10:52:56
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-25 11:34:46
 * @Description: file content
-->
<template>
  <van-nav-bar title="computed" left-arrow @click-left="$router.back()" />
  <div>姓名：{{ name }}</div>
  <span>介绍：{{ describe }}</span>
  <van-divider />
  <van-button type="primary" size="small" round @click="name = '曹操'">主公变曹操</van-button>
  <van-button type="success" size="small" round @click="name = ''">清空主公</van-button>
</template>
<script>
import { computed, ref } from 'vue'

export default {
  setup() {
    const name = ref('刘备')

    // 使用 getter 函数，并为从 getter 返回的值返回一个不变的响应式 ref 对象。
    // 此方法不能直接对describe 进行赋值
    // describe.value = 123 这样的赋值会报错
    const describe = computed(() => {
      if (name.value == '刘备') {
        return '刘备是蜀国的主公'
      } else if (name.value == '曹操') {
        return '曹操是魏国的主公'
      } else {
        return '你主公没了'
      }
    })

    // 可以使用具有 get 和 set 函数的对象来创建可写的 ref 对象。
    const count = ref(1)
    const plusOne = computed({
      get: () => count.value + 1,
      set: (val) => {
        count.value = val - 1
      },
    })
    console.log(plusOne.value)
    plusOne.value = 1
    console.log(count.value)

    return {
      name,
      describe,
    }
  },
}
</script>