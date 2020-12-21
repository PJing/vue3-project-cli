<!--
 * @Author: 彭璟
 * @Date: 2020-11-16 10:50:01
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-12-03 11:34:17
 * @Description: file content
-->
<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
/* 加载样式 */

.loading-mask {
  font-size: 26px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100px;
    height: 90px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
  /deep/ .el-loading-spinner i {
    color: #fff;
  }
  /deep/ .el-loading-spinner .el-loading-text {
    color: #fff;
  }
}
</style>