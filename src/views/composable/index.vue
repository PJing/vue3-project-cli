<!--
 * @Author: 彭璟
 * @Date: 2020-11-25 18:29:16
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-25 18:45:22
 * @Description: file content
-->
<template>
  <van-nav-bar title="组合式api的使用" left-arrow @click-left="$router.back()" />
  {{ dicList[0] }}
</template>
<script>
import useDicList from '@/composables/useDicList'
import { onMounted } from 'vue'
export default {
  setup() {
    const { dicList, getDicList } = useDicList()
    onMounted(async () => {
      await getDicList()
      console.log(dicList.value)
    })
    return {
      dicList,
    }
  },
}
</script>