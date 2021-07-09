<template>
    <div class="plane-box">
    	<slot name="quick-title"></slot>
    	<slot></slot>
    </div>	
</template>
<script>
export default {
     name:"quicks",        
}
</script>
<style scoped>
 .plane-box{
  margin-top:10px;
  display:flex;
  flex-direction:column;
}
</style>	