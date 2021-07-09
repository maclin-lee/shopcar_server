<template>
     <div class="mask">
     	 <div class="loading">
     	 	<img :src="require('../../assets/icons/loading.gif')"></img>
     	 </div>
     	<!-- <img src=""> -->
     </div>	
</template>
<script>
export default {
     name:"loading", 
     data(){
     	return{
     		isLoad:false,
     		url:""
     	}
     }       
}
</script>
<style scoped>
.mask{
	position:fixed;
	left:0;
	top:0;
	right:0;
	bottom:0;
	background-color:#fff;
	width:100%;
	height:100%;
}
.loading{
	position:absolute;
	left:50%;
	top:50%;
	width:200px;
	height:200px;
	margin-left:-100px;
	margin-top:-100px;
	display:flex;
	align-items:center;
	justify-content:center;
	z-index:999;
}
</style>