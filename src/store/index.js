import {createStore}  from 'vuex'
import user from './module/user'

const store = createStore({
  modules: {
    user
  }
})
export default store