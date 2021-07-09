<template>
   <div class="goods">
   	   <div class="goods_info_title">
              <span>{{partData.title}}</span>
       </div>
       <div class="goods_info_price">
              <span>{{partData.price}}</span>
       </div>
       <slot name="check"></slot>
       <slot name="pay"></slot>
       <div class="car_btn">
                <div class="car_btn_icon">
                    <span class="badge">{{badgeCount}}</span>
                    <img src="/image/cart.png"></img>
                    <span>购物车</span>
                </div>
                <div class="car_btn_add">
                    <button class="car_add" @click="add_car">
                      加入购物车
                    </button>
                </div>
       </div>
       <slot name="free_pop"></slot>
       <slot name="info"></slot>
   </div>	
</template>
<script>
export default {
     name:"goods",
     props:{
         partData:{
         	  type:Object,
         	  default(){
         	   return {
         	  	  }
         	  }
         },
         badgeCount:{
             type:Number,
             default:null,
         }
     },
     data(){
     	 return {
     	 	// badgeCount:0
     	 }
     },
     methods:{
     	add_car(){
     		   this.$emit("addCar")
     	}
     }        
}
</script>
<style scoped>
.goods{
  position: relative;
}
.car_btn{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:100%;
  position:fixed;
  bottom:0px;
  left:0px;
  background-color:hsla(0,0%,100%,.95);
  border-top:1px solid #e8e8ed;
  z-index:99;
}
.car_btn_icon{
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-size:11px;
  color:#333333;
  position:relative;
}
.car_btn_icon .badge{
  white-space:nowrap;
  position:absolute;
  right:70px;
  top:0;
  color:#f56c6c;
  height:15px;
  line-height:15px;
  font-size:11px;
  border-radius:10px;
  border-bottom:1px solid #f56c6c;
  text-align:center;
  padding:0 5px;
  display:inline-block;
}
.car_btn_icon img{
  width:40px;
  height:40px;
}
.car_btn_add{
  flex:1;
}
.car_btn_add .car_add{
     border:none;
     background-color:#e4393c;
     height:50px;
     line-height:50px;
     font-size:14px;
     color:#fff;
     outline:none;
     border-radius:none;
     width:100%;
}
</style>	