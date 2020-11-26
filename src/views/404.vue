<!--
 * @Author: 彭璟
 * @Date: 2020-11-23 14:56:11
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-24 10:42:40
 * @Description: file content
-->

<template>
  <van-empty image="network" description="信号丢失了哟！~~~">
      <van-button round plain type="primary" class="bottom-button" @click="$router.replace('/home')"> 返回首页 </van-button>
  </van-empty>

</template>
<script>
export default {}
</script>
<style lang="less" scoped>
  .bottom-button{
    width: 160px;
    height: 40px;
  }
</style>