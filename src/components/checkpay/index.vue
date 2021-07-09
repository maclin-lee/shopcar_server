<template>
     <div class="checkpay">
     	<div class="checkpay">
		    <div class="checkpay_title">{{title}}</div>
		    <div class="checkpay_content">{{content}}</div>
		    <div class="checkpay_icon" @click="showPop">...</div>
        </div>
     </div>	
</template>
<script>
export default {
     name:"checkpay",
     props:{
     	title:{
     		type:String,
     		default:""
     	},
     	content:{
     		type:String,
     		default:""
     	},
     	evType:{
     		type:String,
     		default:"",
     	}
     },
     methods:{
     	showPop(){
     	    switch(this.evType){
     	    	case "freeOpen":
     	    	this.$emit("freeOpen")
     	    	case "infoOpen":
     	    	 this.$emit("infoOpen")
     	    }	
     	}
     }         
}
</script>
<style scoped>
  /* components/checkpay/index.wxss */
.checkpay{
  display:flex;
  width:100%;
  justify-content:space-between;
  font-size:14px;
  box-sizing:border-box;
  color:#333;
  padding: 15px 10px;
  margin-bottom:5px;
  border-bottom: 1px solid #e8e8ed;

}
.checkpay_title{
  width:10%;
  display:inline-block;
}
.checkpay_content{
  width:80%;
  display:inline-block;
}
.checkpay_icon{
  width:10%;
  font-weight:700;
  text-align:right;
  display:inline-block;
}

</style>	