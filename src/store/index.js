import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store=new Vuex.Store({
      state:{
           user_name:window.localStorage.getItem("user_name")||"",
           isAdmin:window.localStorage.getItem("isAdmin")||"",
      },
      getters:{

      },
      mutations:{
          setUserName(state,payLoad){
             state.user_name=payLoad
          },
          setAdmin(state,payLoad){
             state.isAdmin=payLoad
          }
      },
      actions:{

      },
      modules:{
      	// user,
      }
})
export default store