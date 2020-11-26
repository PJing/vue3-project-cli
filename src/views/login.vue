<!--
 * @Author: 彭璟
 * @Date: 2020-11-16 11:22:54
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-11-24 10:42:11
 * @Description: file content
-->

<template>
  <div>
    <div>
      <img class="logo" src="../assets/logo.png" alt="" srcset="" />
    </div>
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="username" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
      <van-field v-model="captcha" name="captcha" label="验证码" placeholder="验证码" :rules="[{ required: true, message: '请填写验证码' }]">
        <template #right-icon>
          <img :src="captchaUrl" class="captcha" @click="getCaptchaUrl" />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit" :loading="loading"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { reactive, toRefs, ref } from 'vue'
import http from '@/utils/http'
import { v4 as uuidv4 } from 'uuid'
import { Toast } from 'vant'
import {useRouter} from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      username: 'admin',
      password: 'admin',
      uuid: '',
      captcha: '',
      loading: false,
    })
    // 登录
    const onSubmit = (values) => {
      state.loading = true
      http
        .post('/login', {
          ...values,
          uuid: state.uuid,
        })
        .then((res) => {
          state.loading = false
          console.log(res)
          if (res.code != 0) {
            Toast.fail(res.msg)
            getCaptchaUrl()
          }else {
            localStorage.setItem('token',res.data.token)
            router.push('/home')
          }
        })
    }

    // 验证码
    const captchaUrl = ref('')
    const getCaptchaUrl = () => {
      state.uuid = uuidv4()
      captchaUrl.value = `${process.env.VUE_APP_BASE_URL}/captcha?uuid=${state.uuid}`
    }
    getCaptchaUrl()

    return {
      ...toRefs(state),
      captchaUrl,
      onSubmit,
      getCaptchaUrl,
    }
  },
}
</script>
<style>
.logo {
  width: 100px;
  height: 100px;
  margin: 40px auto;
  display: block;
}
.captcha {
  height: 20px;
  transform: scale(1.3) translateY(3px);
}
</style>