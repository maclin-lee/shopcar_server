<template>
    <div class="home">
        <navbar-gation 
         :title="title"
         :isLoc="isLoc">
          <location slot="location" :location="location">	
          </location>
         </navbar-gation>
         <Swiper :swiperLen="swiperLenth"
           :indicator="isIndicator"
           :swiperData="swiper_list">
             <SwiperItem v-for="(item,index) in swiper_list">
               <a href="javascript;">
                 <img :src="item.image" alt="图片">
               </a>
             </SwiperItem>   
         </Swiper>
         <Logos>
             <LogoItem v-for="(item,idx) in logos" :logo="item">  
             </LogoItem>
         </Logos>
         <Quicks>
             <QuickTitle slot="quick-title"></QuickTitle>
         </Quicks>
         <ScrollView 
               :scrollX="isScrollX"
               class="ScrollView"
               :vertical="isVertical"
               :probeType="probe">
                  <div class="content">
                       <scroll-item v-for="(item,idx) in quicks"
                        :scrollItemData="item">
                       </scroll-item> 
                  </div>
        </ScrollView>
        <div class="pagerows" v-for="(item,idx) in pageRow">
             <page-row v-for="(j,index) in item" 
             :pageRow="j">
             </page-row>
        </div>
         
    </div>	
</template>
<script>
import navbarGation from "../../components/navBar"
import location from "../../components/location"
import Swiper from "components/swiper"
import SwiperItem from "components/swiper/swiperItem"
import Logos from "./logos"
import LogoItem from "./logos/logoitem.vue"
import Quicks from "./quicks"
import QuickTitle from "./quicks/quickTitle"
import ScrollView from "components/scroller"
import ScrollItem from "./scrollItem"
import PageRow from "./pagerows"
// import {shopcar} from "nets/index"
export default {
     name:"home",
     components:{
        navbarGation,
        location,
        Swiper,
        SwiperItem,
        Logos,
        LogoItem,
        QuickTitle,
        Quicks,
        ScrollView,
        ScrollItem,
        PageRow,
     },
     data(){
     	return{
     		title:"主页",
     		isLoc:true,
        isIndicator:true,
     		location:"上海",
     		swiper_list:[],
        quicks:[],
        logos:[],
        pageRow:[],
        isScrollX:true,
        isVertical:false,
        probe:1,
     	}
     },
     computed:{
         swiperLenth(){
             return this.swiper_list.length
         }
     },
     created(){
        this.$apis.user.getUsers().then(res=>{
           if(res.data.status==0){
              this.$router.push("/mine/login")
           }
        })
        
     	  // axios.get("/api2/getJoke").then(res=>{
     	  // 	console.log(res)
     	  // })
     	  this.$apis.shopcar.getHome().then((res)=>{
     	  	 this.swiper_list=res.data.swipers
           this.logos=res.data.logos
           this.quicks=res.data.quicks
           this.pageRow=res.data.pageRow
          console.log(this.logos)
     	  })
       
          // this.$toast({
          // 	 isToast:true,
          // 	 title:"位置",
          // 	 content:"是否获取你的地理位置信息",
          // 	 success:"确定",
          // 	 fail:"取消"
          // })
      // this.$loading({
      //         isLoad:true,
      //         })

     },
     methods:{
        
     }

}
</script>
<style scoped>
     /*.ScrollView{
        display:flex;
     }*/
     .content{
       display:flex;
       min-width:100vh;
       /*width:auto;*/
       /*flex-wrap:nowrap;*/
     }
     .pagerows{
         display:flex;
     }
</style>