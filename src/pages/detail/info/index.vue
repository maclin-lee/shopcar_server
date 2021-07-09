<template>
      <div class="detail_info_mask" @click.self="handlePop" v-if="isInfo">
              <div class="detail_info_main">
                    <div class="detail_info_main_header">
                        <div class="header_img">
                           <img :src="infoData.loopImgUrl[0]"></img>
                        </div>
                        <div class="main_info">
                          <span class="price">{{infoData.price}}</span>
                          <span class="selectCount">{{infoData.count}}</span>
                        </div>
                        <span @click.stop="handlePop">{{btn}}</span>
                    </div>
                   <div class="detail_info_main_body">
                        <span class="info_mount">{{title}}</span>
                       <div class="amount">
                            <slot name="count"></slot>
                       
                       </div>
                   </div>
                   <div class="detail_info_main_footer">
                        <button
                         @click="add_shopcar"
                         >加入购物车</button>
                    </div>
              </div>

 </div>
</template>
<script>

export default {
     name:"info",
     props:{
     	infoData:{
     		type:Object,
     		default(){
     			 return {

     			 }
     		}
     	},
     	btn:{
     		type:String,
     		default:"X"
     	},
     	isInfo:{
     		type:Boolean,
     		default:true,
     	}


     },
     data(){
         return{
         	title:"数量"
         }
     },
     methods:{
         handlePop(){
            this.$emit("infoClosed")
         },
         add_shopcar(){
           this.$emit("addCar")
         }
     }    
}
</script>
<style scoped>
.detail_info_mask{
  position: fixed;
  background-color: rgba(0, 0, 0, .3);
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 99;
}
.detail_info_main{
     position: absolute;
     bottom: 0;
     left: 0;
     right: 0;
     max-height:400px;
     min-height:300px;
     background-color:#ffffff;
}
.detail_info_main_header{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 75px;
    color: #333;
    font-size: 18px;
    justify-content: space-between;
  }
  .header_img{
    width: 30%;
    position: relative;
  }
  .header_img img{
    position: absolute;
    top: -25px;
   left: 10px;
   width: 90px;
   height: 90px;
   border-radius: 3px;
  }
  .main_info{
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 60%;
  }
  .price{
    color: #e4393c;
    font-size: 18px;
    font-weight: 700;
  }
  .selectCount{
    color: #666;
    font-size: 14px;
    margin-top: 10px;
  }
  .detail_info_main_body{
      margin-bottom: 50px;
      max-height: 360px;
      color: #333;
      font-size: 12px;
      padding: 20px 10px; 
      display: flex;

  }
  .info_mount{
     font-size: 20px;
     margin-left: 10px;
  }
  .amount{
    width: 115px;
    margin-left: auto;
  } 
  .detail_info_main_footer{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin: 0;
  }
  .detail_info_main_footer button{
      width: 100%;
      background-color: #e4393c;
      color: #ffffff;
      line-height: 50px;
      height: 50px;
      border-radius: 0;
  }
</style>	