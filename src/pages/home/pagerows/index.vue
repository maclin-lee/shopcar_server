<template>
    <div class="title">
    	<img :src="pageRow" class="page-img" alt="tubian">
    </div>	
</template>
<script>
export default {
     name:"pagesrow",
     props:{
     	  pageRow:{
     	  	  type:String,
     	  	  default:""
     	  	 
     	  }
     }        
}
</script>
<style scoped>
   .page-img{
    min-width:120px;
    max-width:185px;
    min-height:101px;
    max-height:146px;
  }
</style>