<template>
    <div class="location">
    	<span>{{location}}</span>
    </div>	
</template>
<script>
export default {
     name:"navbar",
     props:{
     	location:{
     		type:String,
     		default:"北京"
     	}
     }      
}
</script>
<style scoped>
     .location{
     	display:flex;
     	flex-direction:column;
     	justify-content:center;
     	align-items:center;
     	text-align:center;
     }
</style>