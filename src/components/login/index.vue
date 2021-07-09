<template>
  <div class="login_wrap">
  	 <div class="user item">
  	 	<span>用户名:</span>
  	 	<input type="text"
  	 	 v-model="user_name" placeholder="请输入你的用户名">
  	 </div>
  	 <div class="pass item">
  	 	<span>密码:</span>
  	 	<input type="password"
  	 	 v-model="pass_word" placeholder="请输入你的密码">
  	 </div>
  	 <div class="login">
  	 	<button class="btn" @click="login">登入</button>
  	 </div>
  	 <div class="reset item">
  	   <router-link to="/mine/reg" tag="span">
       注册用户
       </router-link>
       <router-link to="/mine/findpas" tag="span">
       找回密码
       </router-link>
  	 </div>

  </div>	
</template>
<script>
export default {
     name:"login",
     data(){
     	return {
     		user_name:"",
     		pass_word:"",
        isToast:false,
     	}
     },
     methods:{
        login(){
          let self=this
          this.isToast=true
          this.$apis.user.login(this.user_name,this.pass_word).then(res=>{
            // console.log(res)
              if(res.data.status==1){
               console.log(res.data)
               // console.log(this.isToast)
               let user_name=res.data.data.username
               let isAdmin=res.data.data.isAdmin
               console.log(user_name)
               // user_info=JSON.stringify(res.data.data)
                this.$toast({
                  title:"登录面板",
                  content:"登录成功",
                  isToast:this.isToast,
                  success:"确定",
                  fail:"",
                  handleSuc(){
                    console.log(this)
                    self.isToast=false
                    self.$router.push({
                      path:"/mine/center"
                    })
                  window.localStorage.setItem("user_name",user_name)
                  window.localStorage.setItem("isAdmin",isAdmin)
                  // console.log(self.$store)
                  self.$store.commit("setUserName",user_name)
                  self.$store.commit("setAdmin",isAdmin)
                  }
                })
                // this.$router.push({
                //     path:"/mine/center",
                //     query:{
                //       user_name:res.data.data.username
                //     }
                // })
              }else{
                   console.log(res.data)
              }
          })
        }
     }       
}
</script>
<style scoped>
.login_wrap{
	margin-top:10px;
	padding-left:10px;
}
.item{
	display:flex;
	margin-bottom:20px;
	height:30px;
	font-size:16px;
}
.item span{
	margin-right:10px;
	display:inline-block;
	height:30px;
	line-height:30px;
	min-width:60px;
}
.item input{
	height:30px;
	line-height:30px;
	border:none;
	outline:none;
	padding-left:10px;
	flex:1;
}
input:focus{
	border:1px solid #939495;
	outline:none;
}
.login{
	display:flex;
	justify-content:center;
	align-items:center;
	background-color:#fff;
}
.btn{
   border:none;
   border-radius:none;
   width:50%;
   height:30px;
   line-height:30px;
   text-align:center;
   background-color:#e93b3d;
   letter-spacing:5px;
   color:#fff;
}
.reset{
	margin-top:30px;
	display:flex;
	justify-content:space-between;
	align-items:center;
}
.reset span{
	padding:10px;
	color:blue;
}
</style>