<template>
  <h5>列表页缓存，详情页不缓存</h5>
  <router-view v-slot="{ Component }">
    <keep-alive :include="['list']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script>
import { provide } from 'vue'

export default {
  setup() {
    provide('name', 'vueProject')
  },
  data() {
    return {}
  },
}
</script>