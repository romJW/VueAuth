import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      AuthCode:null
    }
    
  },
  getters: {
    getPassword(state){
      return state.AuthCode
    },
    
  },
  mutations: {
    SetCode(state, payload){
      state.AuthCode = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
