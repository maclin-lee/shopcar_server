<template>
   <div class="logo-info">
   	   	<img :src="logo.image" :alt="logo.title">
   	   	<span class="logo-text">{{logo.title}}</span>
   	</div>	
</template>
<script>
export default {
     name:"logo",
     props:{
     	  logo:{
     	  	type:Object,
     	  	default(){
                return{}
     	  	 }
     	  },
     }               
}
</script>
<style scoped>
 .logo-info{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  padding-top:10px;
  margin-right:8px;
  margin-left:6px;

}
.logo-info img{
	display:inline-block;
	width:60px;
    height:60px;
}
.logo-text{
   font-size:12px;
   color:#aaa;
   display:inline-block;
}
</style>	