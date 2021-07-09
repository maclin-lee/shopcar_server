<template>
	<div class="mine">
		<div class="title">我的</div>
		<div class="content">
			 <router-view></router-view>
		</div>  
    </div>
</template>
<script>
export default {
     name:"mine",
     created(){
     	
     }      
}
</script>
<style scoped>
.mine{
	width:100%;
}
.title{
	width:100%;
	height:30px;
	line-height:30px;
	text-align:center;
	color:#fff;
	background-color:#e93b3d;
}
</style>