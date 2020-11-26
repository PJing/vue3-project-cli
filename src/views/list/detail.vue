<template>
  <div>详情{{ title }}</div>
  <div>provide/indect 传入的值：{{ name }}</div>
</template>
<script>
import { inject } from 'vue'
export default {
  setup() {
    const name = inject('name', 'pengjing')

    return {
      name,
    }
  },
  data() {
    return {
      title: this.$route.query.title,
    }
  },
}
</script>