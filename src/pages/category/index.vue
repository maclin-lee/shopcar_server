<template>
    <div class="category">
         <scroll-view class="navLeft">
             <div>
                <nav-left
                :class="{'navLeft_item_active':idex==curIndex}"
                @click.native.stop="handleItem(idex)"
                v-for="(item,idex) in navLeft"
                :itemCon="item">
                 </nav-left>
             </div>
         </scroll-view>
         <scroll-view class="navRight">
              <div :style="{'padding-top':'6px'}">
                   <nav-right v-for="(item,idx) in navRight[curIndex]"
                   :lists="item"
                    @navigateTo="navTo">           
                   </nav-right>
              </div>
         </scroll-view> 
    </div>	
</template>
<script>
import ScrollView from "components/scroller"
import NavLeft from "./navLeft"
import NavRight from "./navRight"
export default {
     name:"category", 
     data(){
     	return{
            navLeft:[],
            navRight:[],
            curIndex:0,

     	}
     },
     components:{
         NavLeft,
         NavRight,
         ScrollView,
     },
     created(){
          this.$apis.shopcar.getProd().then(res=>{
             console.log(res)
             this.navLeft=res.data.navLeftItems
             this.navRight=res.data.navRightItems
          })
     },
     methods:{
        handleItem(idx){
            this.curIndex=idx
        },
        navTo(txt){
             this.$router.push("/list/"+txt)
        }
     }       
}
</script>
<style scoped>
.category{
  display:flex;
  height:100%;
  flex-direction:row;
  width:100%;
}
.navLeft{
  width:24%;
  height:100%;
  display:flex;
  flex-direction:column;
  background-color:#f8f8f8;
  white-space:nowrap;
}
.navLeft_item_active{
  color:#e93b3d;
  background-color:#fff;
}
.navRight{
  width:74%;
  height:100%;
  background-color:#fff;
}
</style>