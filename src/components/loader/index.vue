<template>
   <div class="loaderWrap" v-if="isLoading">
   	   <span class="load"></span>
   	   <span class="txt">正在努力加载。。</span>
   </div>	
</template>
<script>
export default {
     name:"loader",
     props:{
     	  isLoading:{
     	  	type:Boolean,
     	  	default:true
     	  }
     }        
}
</script>
<style scoped>
     .loaderWrap{
     	position:absolute;
     	bottom:49px;
     	left:0;
     	border-top:1px solid #e333;
     	background-color:#fff;
     	text-align:center;
     	width:100%;
     	padding:5px 0; 
     	display:flex;
     	justify-content:center;
     	align-items:center;
     	font-size:18px;
     }
     .load{
     	display:inline-block;
     	width:40px;
     	height:40px;
     	box-sizing:border-box;
     	border-radius:20px;
     	border-top:5px solid rgba(255,128,0,.2);
     	border-right:5px solid rgba(255,128,0,.2);
     	border-bottom:5px solid rgba(255,128,0,.2);
     	border-left:5px solid rgba(255,128,0,1);
     	animation:loading 1s infinite linear;
     	-webkit-animation:loading 1s infinite linear;
     }
     .txt{
     	display:inline-block;
     	margin-bottom:10px;
     }
     @keyframes loading{
     	0%{
            transform:rotate(0deg);
            -webkit-transform:rotate(0deg);
     	}
     	100%{
            transform:rotate(360deg);
            -webkit-transform:rotate(360deg);
     	}
     }
</style>