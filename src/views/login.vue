<!--
 * @Author: 彭璟
 * @Date: 2020-11-16 11:22:54
 * @LastEditors: 彭璟
 * @LastEditTime: 2020-12-03 12:44:19
 * @Description: file content
-->

<template>
  <el-card class="box-card">
    <div>
      <img class="logo" src="../assets/logo.png" alt="" srcset="" />
    </div>
    <el-form ref="form" :model="state" label-width="80px">
      <el-form-item label="用户名：" prop="username" :rules="[{ required: true, message: '请填写用户名' }]">
        <el-input v-model="state.username" name="username" label="用户名" placeholder="用户名" />
      </el-form-item>
      <el-form-item label="密码：" prop="password" :rules="[{ required: true, message: '请填写密码' }]">
        <el-input v-model="state.password" type="password" name="password" label="密码" placeholder="密码" />
      </el-form-item>
      <el-form-item label="验证码：" prop="captcha" :rules="[{ required: true, message: '请填写验证码' }]">
        <el-input v-model="state.captcha" name="captcha" label="验证码" placeholder="验证码">
          <template #append>
            <img :src="captchaUrl" class="captcha" @click="getCaptchaUrl" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="onSubmit('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import { reactive, ref } from 'vue'
import http from '@/utils/http'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      username: 'admin',
      password: 'admin',
      uuid: '',
      captcha: '',
    })
    const loading = ref(false)

    const form = ref(null)
    // 登录
    const onSubmit = () => {
      console.log(form)
      form.value.validate((valid) => {
        if (valid) {
          loading.value = true
          http
            .post('/login', {
              ...state,
            })
            .then((res) => {
              loading.value = false
              console.log(res)
              if (res.code != 0) {
                getCaptchaUrl()
              } else {
                localStorage.setItem('token', res.data.token)
                router.push('/home')
              }
            })
        } else {
          console.log('error submit!!')
          return false
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
      state,
      captchaUrl,
      onSubmit,
      getCaptchaUrl,
      loading,
      form,
    }
  },
}
</script>
<style>
.box-card {
  width: 800px;
  margin: 100px auto;
}
.logo {
  width: 100px;
  height: 100px;
  margin: 40px auto;
  display: block;
}
.append {
  padding: 0;
}
.captcha {
  width: 90px;
  height: 26px;
  font-size: 0;
  transform: scale(1.44) translateY(1px);
}
</style>