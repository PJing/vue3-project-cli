/*
 * @Author: 彭璟
 * @Date: 2020-11-25 18:09:54
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-25 18:41:53
 * @Description: file content
 */

import http from '@/utils/http'
import { ref } from 'vue'


export default function useDicList() {
  const dicList = ref([])

  const getDicList = async () => {
    const res = await http.get('/sys/dict/type/all')
    if (res.code !== 0) {
      return
    }
    dicList.value = res.data
  }
  return {
    dicList,
    getDicList
  }
}
