<template>
   <div class="logo-bg">
   	   <slot></slot>
   </div>	
</template>
<script>
export default {
     name:"logos",
     
}
</script>
<style scoped>
 .logo-bg{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  width:100%;
  /*justify-content:space-between;*/
  align-items:center;
  background:#ffffff;
}

</style>