<template>
   <div class="admin">
      <el-container>
        <el-header>
          <div class="head-title">
               欢迎来到电商平台:{{username}}
          </div>
        </el-header>
        <el-container>
        <el-aside width="120px">
            <el-menu
          default-active="1"
          class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <router-link tag="span" to="/admin/user">
                用户管理
              </router-link>
            </template>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
           <router-link tag="span" to="/admin/shopcar">
            购物车
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <router-link tag="span" to="/admin/list">
              购物车列表
           </router-link>
          </el-menu-item>
        </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>


   </div>	
</template>
<script>
import User from "nets/user.js"
export default {
     name:"admin",
     data(){
      return {
          username:""
      }
     },
     beforeRouteEnter(to,from,next){
           User.AdminLogin().then(res=>{
              // console.log(.$store.state)
               if(res.data.status!==1){
                  next("/mine/login")
                  return;
               }
               next(vm=>{
                   console.log(vm.$store.state)
                   vm.username=vm.$store.state.user_name
               })
           })
     }
    

}
</script>
<style scoped>
.head-title{
  text-align:left;
}
 .el-header, .el-footer {
    background-color:#B3C0D1;
    color:#333;
    text-align:center;
    line-height:60px;
  }
  
  .el-aside {
    background-color:#D3DCE6;
    color:#333;
    text-align:center;
    line-height:200px;
  }
  
  .el-main {
    background-color:#E9EEF3;
    color:#333;
    text-align:center;
    line-height:160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
 
</style>