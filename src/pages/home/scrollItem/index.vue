<template>
   <div class="scroll-wrap">
   	   <div class="scroll-item">
   	   	     <img :src="scrollItemData.image" :alt="scrollItemData.price">
              <span>{{scrollItemData.price}}</span>
   	   </div>
   </div>	
</template>
<script>
export default {
     name:"scrollItem",
     props:{
     	  scrollItemData:{
     	  	  type:Object,
     	  	  default(){
     	  	  	return {

     	  	  	}
     	  	  }
     	  },
     }        
}
</script>
<style scoped>
.scroll-wrap{
	display:inline-block;
	flex-shrink:1;
}
 .scroll-item{
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:5px;
}
.scroll-item img{
  width:85px;
  height:85px;
}
.scroll-item span{
   font-size:16px;
   color:#ff0000;
   margin-top:10px;
  }
</style>	