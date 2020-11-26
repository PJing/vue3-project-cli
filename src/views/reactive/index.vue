<!--
 * @Author: 彭璟
 * @Date: 2020-11-25 15:28:46
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-26 09:54:43
 * @Description: file content
-->
<template>
  <van-nav-bar title="ref,reactive" left-arrow @click-left="$router.back()" />
  <van-cell title="姓名" :value="state.name" />
  <van-cell title="性别" :value="state.sex" />
  <van-cell title="国家" :value="country" />
  <van-button type="primary" round @click="state.name = '曹操'">改变名字1</van-button>
  <van-button type="primary" round @click="changeName('孙权')">改变名字2</van-button>
  <br />
  <van-button type="primary" round @click="country = '魏国'">改变国家1</van-button>
  <van-button type="primary" round @click="changeCountryName('吴国')">改变国家2</van-button>

  <van-divider />
  <van-cell title="姓名" :value="name" />
  <van-cell title="性别" :value="sex" />
  <span ref="domSpan">我是一个有ref属性的dom节点</span>
</template>
<script>
import { onMounted, reactive, ref, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      name: '刘备',
      sex: '男',
    })

    // 获取dom上的ref
    const domSpan = ref(null)

    onMounted(() => {
      console.log('domSpan', domSpan.value)
    })

    const country = ref('蜀国')

    const changeName = (name) => {
      state.name = name
    }
    const changeCountryName = (name) => {
      country.value = name
    }

    return {
      domSpan,
      state,
      country,
      changeName,
      changeCountryName,
      ...toRefs(state),
    }
  },
}
</script>