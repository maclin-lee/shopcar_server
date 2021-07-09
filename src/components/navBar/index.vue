<template>
   <div class="navBar">
   	    <div class="navBar_left">
   	    	<i class="iconfont icon-zuojiantou" @click="goBack"></i>
   	    	<slot v-if="isLoc" name="location"></slot>
   	    </div>
   	    <div class="title">{{title}}</div>
   	    <slot v-if="isRight" name="right"></slot>
   </div>	
</template>
<script>
export default {
     name:"navBar", 
     props:{
     	isLoc:{
     		type:Boolean,
     		default:false,
     	},
     	title:{
     		type:String,
     		default:"主页"
     	},
     	isRight:{
     		type:Boolean,
     		default:false,
     	}

     },
     methods:{
        goBack(){
            // console.log(this.$router)
            this.$router.back()
        }
     }       
}
</script>
<style scoped>
     .navBar{
     	display:flex;
     	height:44px;
     	width:100%;
     	background-color:#fbf9fe;
     	color:black;
     	position:fixed;
     	left:0;
     	top:0;
     	right:0;
     	font-size:18px;
     	align-items:center;
     	box-sizing:border-box;
     	padding-left:10px;
     }
     .navBar .navBar_left{
     	display:flex;
     	min-width:20%;
     	align-items:center;
     	text-align:center;
     }
     .navBar_left i{
         font-size:22px;
         margin-right:10px;
     }
     .title{
     	width:60%;
     	text-align:center;
     	letter-spacing:5px;
     }
</style>