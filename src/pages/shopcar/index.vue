<template>
 <div class="shopcar">
    	<!-- 这是购物车空空给 -->
	    	<div class="carshop_empty"
	    	 v-if="car_data.length==0">
	           <img src="/image/shop_cart.png" class="empty-icon"/>
	           <div class="empty">
	             <span class="empty_text">购物车空空如也,去逛逛吧</span>
	           </div>          
	        </div>
        <!-- 这是内容区 -->
        <div class="carshop_wrap" v-else>
                   <div class="carshop_content"
                   :class="item.isMoveTouch?'con-active':''"
                   v-for="(item,idx) in car_data"
                   @touchstart="handleStart"
                   @touchmove="handleEnd($event,idx)">
                       <div class="carshop_content_item">
                              <div class="carshop_content_img"
                              @click="oneSelect(item)">
                                <img src="/image/selected.png" v-if="item.select"/>
                                <img src="/image/unselect.png" v-else>
                              </div>
                              <div class="carshop_content_info">
                                    <img :src="item.loopImgUrl[0]"/>
                                    <div class="detail_info">
                                        <div class="title">
                                           <span>{{item.title}}</span>
                                        </div>
                                        <div class="price">
                                           <span>{{item.price}}</span>
                                        </div>
                                    </div>
                              </div>
                       </div>
                       <div class="carshop_content_del"
                       @click="deleCarData(idx)">
                           删除
                       </div>

                   </div>
            
            <!-- 这是全选计算区 -->
            <div class="select_check">
                 <div class="select_all" @click="allSelect">
                   <img v-if="selectAll" src="/image/selected.png"/>
                   <img v-else src="/image/unselect.png"/>
                   <span>全选</span>
                 </div>
                 <div class="total_price">
                    <span>合计</span>
                     <span class="price_txt">{{totalPrice}}</span>
                 </div>
                 <div class="check_pay">
                      <button class="check_btn"
                      @click="handleCheck">结算</button>
                 </div>
            </div>
          <!-- 这是结算结束 -->
     </div>
           
</div>
</template>
<script>
export default {
     name:"shopcar",
     data(){
          return{
          	car_data:[],
          	startX:0,
          	startY:0,
          	moveX:0,
          	moveY:0,
          	
          }
     },
     activated(){
     	let carStr=window.localStorage.getItem("car_data")||'[]'
     	// console.log(carStr)
     	let carData=JSON.parse(carStr)
     	this.car_data=carData

     },
     computed:{
          totalPrice(){
          	  let initPrice=0
          	  if(this.car_data.length==0){
          	  	 return initPrice
          	  }else{
          	  	this.car_data.forEach(item=>{
                     if(item.select){
                     	 initPrice+=item.price*item.total
                     }
          	  	})
          	  	console.log(initPrice)
          	  	return initPrice;
          	  }
          },
          selectAll(){
               let selectAll=false
               if(this.car_data.length==0){
               	 return selectAll
               }else{
                  let selectArr=this.car_data.filter(item=>{
                   	   return item.select
                   })
                  if(selectArr.length!=this.car_data.length){
                  	  selectAll=false
                  }else{
                  	  selectAll=true
                  }
                  return selectAll
               }
          }
     },
     methods:{
     	handleStart(e){
     		// console.log(e)
           this.startX=e.touches[0].pageX
           this.startY=e.touches[0].pageY
     	},
     	handleEnd(e,idx){
     		// console.log(e,idx)
            this.moveY=e.touches[0].pageY
            this.moveX=e.touches[0].pageX

            let angel=this.getAngel({x:this.startX,y:this.startY},
            	  {x:this.moveX,y:this.moveY})
            let distance=this.moveX-this.startX
           if(Math.abs(angel)>30)return;
           	this.car_data.forEach((item,index)=>{
           	    this.$set(this.car_data[index],"isMoveTouch",false)
             })
           if(distance<0){
             this.$set(this.car_data[idx],"isMoveTouch",true)
           }else{
           	 this.$set(this.car_data[idx],"isMoveTouch",false)
           }
           
           
           // this.isMoveTouch=this.car_data[idx].isMoveTouch
           // console.log(this.car_data)

     	},
     	getAngel(start,end){
           let x=end.x-start.x
           let y=end.y-start.y
           // console.log(Math.PI)
           return 360*Math.atan(y/x)/2*Math.PI
     	},
     	oneSelect(item){
            item.select=!item.select
     	},
     	allSelect(){
     		this.car_data.map(item=>{
     			 item.select=!item.select
     		})
     	},
     	deleCarData(index){
             this.car_data.splice(index,1)
     	},
     	handleCheck(){
     		console.log("请调用支付接口。。")
     	}

     }        
}
</script>
<style scoped>
 .shopcar{
  position: relative;
  width: 100%;
  height: 100%;

}
.carshop_empty{
  width: 100%;
  padding: 30px 0 15px;
  text-align: center;
}
.empty_icon{
  width: 90px;
  height: 90px;
}
.empty_txt{
  font-size: 16px;
  color: rgba(55,55, 55, .66);
  line-height: 24px;
  margin-top: 12px 0;

}
.carshop_wrap{
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.carshop_content{
  display: flex;
  margin-bottom: 11px;
  flex-direction: row;
  overflow: hidden;
}
.carshop_content_item{
  width: 100%;
  display:flex;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 5px;
  flex-direction: row;
  margin-right: 0;
  transform: translateX(0px);
  transition: all .3s;

}
.carshop_content_img{
  width: 9%;
  position: relative;
  margin-right: 10px;
}
.carshop_content_img img{
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  margin-top: -10px;
}
.carshop_content_info{
  box-sizing: border-box;
  padding: 10px 5px;
  display: flex;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(150, 150, 150, .3);
}
.carshop_content_info img{
   width: 100px;
   height: 100px;
}
.detail_info{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  margin-top: 5px 0;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
}
.price{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
}
.price span{
  font-size: 32rpx;
  line-height: 40rpx;
  color: #e4393c;
}
.select_check{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  font-size: 14px;
  background-color: #ffffff;
  border-top: 1px solid #e8e8ed;
  display: flex;
  flex-direction: row;
  z-index: 99;
  font-size: 18px;
}
.select_all{
  width: 20%;
  line-height: 50px;
 font-size: 12px;
 color: #999;
 padding-left: 10px;
 font-size: 12px;
}
.select_all img {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
.total_price{
  width: 30%;
  box-sizing: border-box;
  line-height: 50px;
  font-size: 16px;
}
.price_txt{
  color: #e4393c;
  font-weight: 700;
  margin-right: 10px;
}
.check_pay{
  flex: 1;
}
.check_btn{
  background-color: #e4393c;
  width: 100%;
  line-height: 50px;
  height: 50px;
  border-radius: 0;
  border: none;
  color: #ffffff;

}
.carshop_content_del{
  width: 60px;
  flex-shrink: 0;
  background-color: #e4393c;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: translateX(0px);
  transition: all .4s;
}
.con-active .carshop_content_del,
.con-active .carshop_content_item{
	transform: translateX(-60px);
}

</style>