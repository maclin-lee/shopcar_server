<template>
     <div class="navLeft_Item">
     	  <span>{{itemCon}}</span>
     </div>	
</template>
<script>
export default {
     name:"navbar", 
     props:{
     	itemCon:{
     		 type:String,
     		 default:"",
     	}
     },
      
}
</script>
<style scoped>
 .navLeft_Item{
  height:40px;
  line-height:40px;
  text-align:center;
  color:#333;
  font-size:15px;
  padding-left:10px;
  box-sizing:border-box;
}

</style>