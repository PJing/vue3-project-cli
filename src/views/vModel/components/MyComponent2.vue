<!--
 * @Author: 彭璟
 * @Date: 2020-11-26 17:23:36
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-26 18:06:26
 * @Description: file content
-->
<template>
  <div>
    <label for="">姓名:</label>
    <input type="text" :value="name" @input="$emit('update:name', $event.target.value)" />
    <br />
    <label for="">年龄:</label>
    <input type="number" :value="age" @input="changeAge" />
    <br />
    <label for="">国家:</label>
    <input type="text" :value="country" @change="changeCountry" />
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    age: Number,
    country: String,
  },
  setup(props, { emit }) {
    console.log({props})

    const changeAge = (e) => {
      emit('update:age', Number(e.target.value))
    }
    const changeCountry = (e) => {
      emit('update:country', e.target.value)
    }

    return {
      changeAge,
      changeCountry,
    }
  },
}
</script>