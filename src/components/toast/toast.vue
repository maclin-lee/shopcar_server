<template>	
	<div class="toast" v-show="isToast">
	      <div class="title">
	      	 <p>{{title}}</p>
	      </div>
	      <div class="body">
	      	<p>{{content}}</p>
	      </div>
	      <div class="footer">
	      	 <button class="success" v-if="sucs"
	      	  @click="success">
	      	 {{sucs}}
	      	</button>
	      	 <button class="faile" v-if="fails" @click="fail">
	      	  {{fails}}
	      	</button>
	      </div>
	</div>
</template>
<script>
export default {
     name:"navbar",
     data(){
         return {
         	title:"弹框",
         	content:"这是弹框内容",
         	sucs:"确定",
         	fails:"取消",
          isToast:false,
         }
     },
     methods:{
     	success(){
           console.log("成功。。")
     	},
     	fail(){
           console.log("失败。。")
     	}
     }

}
</script>
<style scoped>
     .toast{
     	position:absolute;
     	width:200px;
     	min-height:200px;
     	top:50%;
     	margin-top:-100px;
     	margin-left:-100PX;
     	left:50%;
     	background-color:#fff;
     	border-radius:5px;
     	box-shadow:0 1px 2px rgba(22,22,22,.2);
        border:1px solid #939495;

     }
     .title{
     	height:30px;
     	line-height:30px;
     	display:flex;
     	background-color:black;
     }
     .title p{
       font-size:18px;
       text-align:center;
       color:#ffffff;
       flex:1;
       margin-top:0;
       /*height:100%;*/
     }
     .body{
       min-height:150px;
       padding:10px;
       text-align:center;
       border: 1px solid #939495;
       border-left:none;
       border-right:none;
       box-sizing:border-box;
     }
     .footer{
     	display:flex;
     	flex-direction:row;
     	justify-content:center;
     	align-items:center;
     	height:30px;
     	line-height:30px;
     }
     .footer button{
           border:none;
           border-radius:none;
           width:100px;
           height:30px;
           line-height:30px;


     }
     .success{
         background-color:rgba(33,33,33,.3);
     }
     .fail{
     	background-color:rgba(255,255,255,.3);
     }

</style>