<template>
     <div class="center">
        <div class="use_info">
            <span class="user">用户:{{username}}</span>
            <span class="loginBtn" @click="loginOut">{{msg}}</span>
        </div> 
        <div class="login_user" v-if="isAdmin">
        用户管理员：<a href="/admin" target="_blank">
        {{username}}
         </a>
        </div>
        <div class="login_user" v-if="!isAdmin">
            普通用户：<span>{{username}}</span>
        </div>
     </div>	
     

</template>
<script>
import Axios from "nets/user"
export default {
     name:"navbar",
     data(){
     	return{
     		username:"66",
            msg:"退出",
            isAdmin:""
     	} 
     },
     beforeRouteEnter(to,from,next){
       Axios.getUsers().then(res=>{
            console.log(res)
            if(res.data.status==0){
                next("/mine/login")
                return;
            }
            next(vm=>{
                // console.log(vm.$store.state)
                vm.username=vm.$store.state.user_name
                vm.isAdmin=vm.$store.state.isAdmin
            })
       })
     },
     created(){
          // let username=this.$route.query.user_name
          // console.log(this.$route)
          // this.username=username
          // this.msg="登入"
     },
     methods:{
        loginOut(){
            //console.log(window.localStorage.getItem("user_info"))
            Axios.loginOut().then(res=>{   
                 if(res.data.status==1){
                    window.localStorage.removeItem("user_name")
                    window.localStorage.removeItem("isAdmin")
                    this.$store.commit("setUserName","")
                    this.$store.commit("setAdmin","")
                    this.$router.push("/mine/login")
                 }
            })
        },
        backAdmin(){
            this.$router.push("/admin")
        }
     }        
}
</script>
<style scoped>

</style>