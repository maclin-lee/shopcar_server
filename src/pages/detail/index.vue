<template>	
   <div class="detail">
            <Swiper class="swiper" :swiperData="loopImgUrl"
            :swiperLen="loopImgUrl.length">
            	<swiper-item class="swiperitem"
            	 v-for="(item,idx) in loopImgUrl"
            	  :swiperLen="loopImgUrl.length">
            	  <img :src="item" alt="">
            	 </swiper-item>
            </Swiper>
            <Goods :partData="partData"
            :badgeCount="car_data.length"
            @addCar="add_car">
            	 <check-pay slot="check" 
               :title="checkTitle"
               evType="freeOpen" 
               :content="content.des"
                @freeOpen="showFree">
               </check-pay>
               <check-pay slot="pay" 
               :title="payTitle"
               :content="counts"
               evType="infoOpen"
               @infoOpen="showInfo">
               </check-pay>
               <free-pop 
               :freePopItems="freeData"
               :isFree="IsFree"
               @closedPop="closedFree"
               @changeItem="handleItem"
               slot="free_pop">  
               </free-pop>
              <info-detail 
              :infoData="partData"
               slot="info"
               :isInfo="IsInfo"
               @infoClosed="handleInfo"
               @addCar="add_car"
              >
                  <Acount 
                  :count="partData.count" 
                  slot="count"
                  @incr="handleIncr"
                  @redc="handleRedc"
                  @input="handleInput">  
                  </Acount>
              </info-detail>
            </Goods>
   </div>
</template>
<script>
import Swiper from "components/swiper"
import SwiperItem from "components/swiper/swiperItem"
import Goods from "components/goods"
import CheckPay from "components/checkpay"
import FreePop from "pages/free_pop"
import InfoDetail from "./info"
import Acount from "components/count"
export default {
     name:"detail",
     data(){
         return {
         	partData:{},
         	freeData:[],
         	loopImgUrl:[],
          checkTitle:"已选",
          content:{
             des:"【白条支付】首单免减优惠】"
          },
          payTitle:"支付",
          IsFree:false,
          IsInfo:false,
          car_data:[]
         }
     },
     components:{
          Swiper,
          SwiperItem,
          Goods,
          CheckPay,
          FreePop,
          InfoDetail,
          Acount,
     },
     computed:{
          counts(){
               return this.partData.count.toString()
          }
         
     },
     activated(){
           let carStr=window.localStorage.getItem("car_data")||'[]'
           let car_data=JSON.parse(carStr)
           this.car_data=car_data
           // console.log(this.car_data)
     },
     methods:{
          closedFree(){
              console.log("111")
               this.IsFree=false
          },
          showFree(){
              this.IsFree=true
          },
          handleItem(item){
              // console.log(item)
              this.content.des=item.desc
          },
          showInfo(){
              this.IsInfo=true
          },
          handleInfo(){
             // console.log("sddf")
             this.IsInfo=false
          },
          handleIncr(count){
               this.partData.count=count
          },
          handleRedc(count){
               this.partData.count=count
          },
          handleInput(count){
               this.partData.count=count
          },
          copyObject(cur,tar){
                for(var i in tar){
                    cur[i]=tar[i]
                }
          },
         add_car(){
        let carStr=window.localStorage.getItem("car_data")||'[]'
        let car_data=JSON.parse(carStr)
        let infoData={}
        this.copyObject(infoData,this.partData)
        infoData.total=this.partData.count
        infoData.select=false
        // console.log(infoData)
        if(car_data.length==0){
             car_data.push(infoData)
          }else{
              let isCar=false
              car_data.forEach(item=>{
                   if(item.id==infoData.id){
                      isCar=true
                      item.total+=infoData.count
                   }
              })
              if(!isCar){
                  car_data.push(infoData)
               }      
                
            }
        window.localStorage.setItem("car_data",JSON.stringify(car_data))

        this.$router.push("/shopcar")
      }


     },
     created(){
     	this.$apis.shopcar.getDetail().then(res=>{
     		  let id=this.$route.params.id
     		  res.data.forEach((item,idx)=>{
     		  	    if(id==item.partData.id){
     		  	    	this.partData=item.partData
     		  	    	this.freeData=item.baitiao
     		  	    	this.loopImgUrl=item.partData.loopImgUrl
     		  	    	// console.log(this.partData,this.freeData)
     		  	    }
     		  })
         console.log("异步获取数据。。。")

     	})
     }       
}
</script>
<style scoped>
  .swiper{
  width:100%;
  border-bottom:1px solid #e8ede8;
  border-top:1px solid #e8ede8;
  box-sizing:border-box;
  height:200px;
}

.swiper-item{
  width:100%;
  height:100%;
}
.swiper-item img{
  width:100%;
  height:100%;
}

</style>