<template>
   <div class="title">	
       <img class="theme-bg" src="/image/bej.png" alt="">
       <div class="theme-more">	
            <span class="text">掌上秒杀</span>
            <img src="/image/arrowright.png" alt="箭头右">
       </div>
   </div>	
</template>
<script>
export default {
     name:"quickTitle",        
}
</script>
<style scoped>
.title{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  flex-direction:row;
  margin-top:10px;
}
.title .theme-bg{
  width:90px;
  height:20px;
}
.title .theme-more{
  height:40px;
}
.title .text{
  font:12px;
  color:#aaa;
  margin-right:2px;
}
.title img{
   height:10px;
   width:10px;
   margin-right:10px;
}
</style>	