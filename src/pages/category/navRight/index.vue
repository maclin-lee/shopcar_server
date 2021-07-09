<template>
    <div class="navRight_wrap">
    	  <div class="title">{{lists.title}}</div>
    	  <div class="navRight_wrap_items">
    	  	  <div class="navRight_wrap_des" 
              v-for="(item,idx) in lists.desc"
    	  	   @click="goback(item.text)">
               <img :src="item.img"></img>
               <span class="text">{{item.text}}</span>
              </div> 
    	  </div>
    </div>	
</template>
<script>
export default {
     name:"navRightItem",
     props:{
          lists:{
          	type:Object,
          	default(){
          		return {

          		}
          	}
          }
     },
     methods:{
     	goback(txt){
            this.$emit("navigateTo",txt)
     	}
     }        
}
</script>
<style scoped>
 .title{
  height:30px;
  line-height:30px;
  font-size:15px;
  color:#080808;
  font-weight:700;
}
.navRight_wrap_items{
  display:flex;
  flex-direction:row;

}
.navRight_wrap_items .navRight_wrap_des{
  display:flex;
  flex-direction:column;
}
.navRight_wrap_des img{
    width:75px;
    height:75px;
}
.text{
  text-align:center;
  color:#686868;
  margin-top:10px;
  font-size:12px;
  height:35px;
}
</style>	