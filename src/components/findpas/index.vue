<template>
    <div class="find_wrap">
     <div class="user item">
      <span>用户名:</span>
      <input type="text"
       v-model="user_name" placeholder="请输入你的用户名">
     </div>
     <div class="pass item">
      <span>密码:</span>
      <input type="text"
       v-model="pass_word" placeholder="请输入你的密码">
     </div>
     <div class="email item">
      <span>邮箱:</span>
      <input type="text"
       v-model="email" placeholder="请输入你的邮箱">
     </div>
     <div class="item">
      <span>验证码:</span>
      <div class="verify">
        <input type="text"
       v-model="verify" 
       placeholder="请输入你的验证码">
       <button :disabled="disabled" 
       @click="getVerify">{{count}}</button>
      </div>
     </div>
     <div class="confirm">
       <button class="btn" @click="updatePas">确定</button>
     </div>
     <div class="reset item">
      <router-link tag="span" to="/mine/reg">注册用户</router-link>
      <router-link tag="span" to="/mine/login">登入账户</router-link>
      
     </div>

  </div> 	
</template>
<script>
export default {
     name:"findpas",
     data(){
     	return{
     		user_name:"",
     		pass_word:"",
     		email:"",
     		verify:"",
     		count:"发送验证码",
        disabled:false,
     	}
     },
     methods:{
     	updatePas(){
          this.$apis.user.findPas(this.user_name,this.pass_word,
            this.verify,this.email)
          .then(res=>{
               if(res.data.status==1){
                this.$router.push("/mine/login")
               }
          })
     	},
      getVerify(){
          let email=this.email
          let count=60
          this.count=count
          this.disabled=true
          this.$apis.user.getVerify(email).then(res=>{
             console.log(res)
             if(res.data.status!==""){
                this.getCount()
             }
          })
       },
       getCount(){          
         var timer=window.setInterval(()=>{
            this.count=--this.count<=0?0:this.count
            // console.log(this.count)
            if(this.count==0){
             clearInterval(timer)
             timer=null
             // console.log(this.count,timer)
             this.disabled=false
             this.count="发送验证码"
             }
          },1000)
         
          // window.clearInterval(timer)
          // console.log(timer)
        }
     }      
}
</script>
<style scoped>
 .find_wrap{
  margin-top:10px;
  padding-left:10px;
}
.item{
  display:flex;
  margin-bottom:20px;
  height:30px;
  font-size:16px;
}
.item>span{
  margin-right:10px;
  display:inline-block;
  height:30px;
  line-height:30px;
  min-width:60px;
}
.item>input,.verify>input{
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
.confirm{
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
.count{
  margin-left:10px;
}
</style>