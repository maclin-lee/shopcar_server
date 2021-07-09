<template>	
	<div class="tabBar">
         <slot></slot>
	</div>
</template>
<script>
export default {
     name:"tabBar",
     props:{
         
     }       
}
</script>
<style scoped>
    .tabBar{
    	display:flex;
        border-top:1px solid #000;
        width:100%;
        height:49px;
        box-sizing:border-box;
        font-size:16px;
        position:fixed;
        bottom:0;
        left:0;
        background-color:#fff;
        right:0;
    }
</style>