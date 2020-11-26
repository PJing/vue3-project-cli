<!--
 * @Author: 彭璟
 * @Date: 2020-11-26 10:35:45
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-26 16:05:51
 * @Description: file content
-->
<template>
  <div>
    <van-radio-group v-model="name" @change="changeValue">
      <van-radio v-for="item in list" :key="item" :name="item">{{ item }}</van-radio>
    </van-radio-group>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
export default {
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    console.log(props.modelValue)
    const list = ref(['刘备', '曹操', '孙权', '范德彪'])

    const name = computed({
      get:() => props.modelValue,
      set:(val) => {
        emit('update:modelValue',val)
      }
    })

    const changeValue = (val) => {
      console.log(val);
      // emit('update:modelValue',val)
    }

    return {
      changeValue,
      list,
      name
    }
  },
}
</script>