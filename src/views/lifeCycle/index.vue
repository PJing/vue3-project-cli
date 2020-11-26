<!--
 * @Author: 彭璟
 * @Date: 2020-11-25 16:44:03
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-25 17:39:30
 * @Description: file content
-->
<template>
  <van-nav-bar title="在setup中使用生命周期" left-arrow @click-left="$router.back()" />
  <h5>3秒后文字改变：{{ text }}</h5>
  <h6>选项 API 生命周期选项和组合式 API 之间的映射</h6>
  <table>
    <thead>
      <tr>
        <th>选项式 API</th>
        <th>Hook inside <code>setup</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>beforeCreate</code></td>
        <td>Not needed*</td>
      </tr>
      <tr>
        <td><code>created</code></td>
        <td>Not needed*</td>
      </tr>
      <tr>
        <td><code>beforeMount</code></td>
        <td><code>onBeforeMount</code></td>
      </tr>
      <tr>
        <td><code>mounted</code></td>
        <td><code>onMounted</code></td>
      </tr>
      <tr>
        <td><code>beforeUpdate</code></td>
        <td><code>onBeforeUpdate</code></td>
      </tr>
      <tr>
        <td><code>updated</code></td>
        <td><code>onUpdated</code></td>
      </tr>
      <tr>
        <td><code>beforeUnmount</code></td>
        <td><code>onBeforeUnmount</code></td>
      </tr>
      <tr>
        <td><code>unmounted</code></td>
        <td><code>onUnmounted</code></td>
      </tr>
      <tr>
        <td><code>errorCaptured</code></td>
        <td><code>onErrorCaptured</code></td>
      </tr>
      <tr>
        <td><code>renderTracked</code></td>
        <td><code>onRenderTracked</code></td>
      </tr>
      <tr>
        <td><code>renderTriggered</code></td>
        <td><code>onRenderTriggered</code></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { onMounted, onUpdated, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    console.log(route.query)
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
    const text = ref(123)
    setTimeout(() => {
      text.value = 456
    }, 3000)
    return {
      text,
    }
  },
}
</script>
<style lang="less" scoped>
table {
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
  td {
    border: 1px solid #ccc;
    padding: 10px;
  }
}
</style>