<template>
   	<div class="proList_item">
             <div class="proList_item_cover">
               <img class="cover_img" :src="prolistItem.cover"></img>
             </div>
             <div class="proList_item_info">
                  <div class="proList_info_title">
                    <span>{{prolistItem.title}}</span>
                  </div>
                  <div class="proList_info_body">
                     <span>{{prolistItem.price}}</span>
                  </div>
                  <div class="proList_info_other">
                      <span class="comment">{{prolistItem.comment}}</span>
                      <span class="rate">好评率{{prolistItem.rate}}}</span>
                  </div>
             </div>
      </div>
</template>
<script>
export default {
     name:"prolistItem", 
     props:{
     	  prolistItem:{
     	  	 type:Object,
     	  	 default(){
     	  	 	return {

     	  	 	}
     	  	 }
     	  }
     }       
}
</script>
<style scoped>
.proList_item{
  display:flex;
  flex-direction:row;
  padding:4px 0;
  background-color:#ffffff;
  justify-content:space-between;
}
.proList_item_cover{
  width:260px;
  height:120px;
  padding: 0 15px;
}
.cover_img{
  width:100%;
  height:100%;
  vertical-align:top;
  border:none;
}
.proList_item_info{
  min-height:120px;
  overflow:hidden;
  padding:0 10px 8px 10px;
  box-sizing:border-box;
  border-bottom:2px solid #e8e8ed;
}
.proList_info_title{
  color:#333;
  font-size:14px;
  margin-top:8px;
  overflow:hidden;
  text-overflow:ellipsis;
  word-break:break-all;
  height:40px;
  display:-webkit-box;
}
.proList_info_body{
  min-width:40px;
  color:#e93b3d;
  height:18px;
  margin-top:13px;
  display:inline-block;
}
.proList_info_other{
  padding:8px 30px 2px 0;
  font-size:12px;
  color:#999;
  height:20px;
  overflow:hidden; 
}
.rate{
  margin-right:5px;
}
.comment{
  margin-right:5px;
}

</style>