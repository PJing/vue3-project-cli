<!--
 * @Author: 彭璟
 * @Date: 2020-11-26 10:24:26
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-26 18:10:44
 * @Description: file content
-->
<template>
  <van-nav-bar title="自定义model" left-arrow @click-left="$router.back()" />
  <van-divider>单个v-model</van-divider>
  <my-component-1 v-model="name" />
  <van-divider>多个v-model</van-divider>
  <my-component-2 v-model:name="name" v-model:age="age" v-model:country="country" />
</template>
<script>
import { reactive, toRefs, watch } from 'vue'
import MyComponent1 from './components/MyComponent1.vue'
import MyComponent2 from './components/MyComponent2.vue'
export default {
  components: { MyComponent1, MyComponent2 },
  setup() {
    const state = reactive({
      name: '刘备',
      country: '蜀国',
      age: 50,
    })
    watch(() => [state.name, state.age, state.country], ([newName, newAge, newCountry], [oldName, oldAge, oldCountry]) => {
      console.log({ newName, newAge, newCountry })
      console.log({ oldName, oldAge, oldCountry })
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>