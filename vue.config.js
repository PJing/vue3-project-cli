/*
 * @Author: 彭璟
 * @Date: 2020-12-02 16:07:31
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-12-03 10:20:40
 * @Description: file content
 */
module.exports = {
  // 选项...
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
}