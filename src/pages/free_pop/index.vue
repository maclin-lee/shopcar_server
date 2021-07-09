<template>
     <div class="free_pop" @click.self="handleMask" v-if="isFree">
     <div class="popmain">
        <div class="popmain_title">
            <span class="title">{{title}}</span>
            <span class="icon-title"
             @click="handleBtn">{{btn}}</span>
        </div> 
        <div class="popmain_body">
             <div class="popmain_body_item"
              v-for="(item,idx) in freePopItems"
              @click.stop="changeIndex(item,idx)">
                   <div class="img_zone">
                    <img v-if="item.select" 
                    src="/image/selected.png">
                    </img>
                    <img v-else src="/image/unselect.png"></img>
                   </div>
                   <div class="popmain_body_item_info">
                       <span class="des">{{item.desc}}</span>
                       <span class="tip">{{item.tip}}</span>
                   </div>
             </div>
        </div>
     <div class="popmain_footer">
          <button>立即打白条</button>
     </div>   
     </div>

</div>
</template>
<script>
export default {
     name:"free_pop",
     props:{
     	  freePopItems:{
     	  	 type:Array,
     	  	 default(){
     	  	 	return []
     	  	 }
     	  },
     	  title:{
     	  	type:String,
     	  	default:"京东白条"
     	  },
     	  btn:{
     	  	type:String,
     	  	default:"X"
     	  },
     	  isFree:{
     	  	type:Boolean,
     	  	default:true,
     	  },
       self:{
          type:String,
          default:"self"
       }
     },
     methods:{
        handleMask(){
            // console.log("112")
          // this.isFree=false
              this.$emit("closedPop")
             // console.log(ev)
            // this.$emit("closedPop",this.isFree)
        },
        handleBtn(){
           this.$emit("closedPop")
        },
        changeIndex(item,idx){
            this.freePopItems.map((item,idx)=>{
                    item.select=false
            })
            // console.log(this.freePopItems)
            this.freePopItems[idx].select=true
            this.$emit("changeItem",this.freePopItems[idx])
        }
     }        
}
</script>
<style scoped>
  /* components/popUp/index.wxss */
.free_pop{
  position:fixed;
  background-color:rgba(0, 0, 0, .5);
  height:100%;
  width:100%;
  left:0;
  top:0;
  right:0;
  bottom:0;
  
}
.popmain{
   position:absolute;
   bottom:0;
   left:0;
   max-height:400px;
   min-height:300px;
   background-color:#ffffff;
   width:100%;

}
.popmain_title{
  position:relative;
  color:#333;
  background-color:#f3f2f8;
  height:40px;
  line-height:40px;
  text-align:center;
  font-weight:700;

}
.icon-title{
  position:absolute;
  right:10px;
}
.popmain_body{
  margin-bottom:10px;
  color:#333;
  font-size:12px;
  max-height:360px;
  overflow:auto;
  padding:20px 10px;
}
.popmain_body_item{
  display:flex;
 flex-direction:row;
 margin-bottom:10px;

}
.img_zone{
  width:18px;
  height:18px;
  margin-right:10px;
  margin-top:12px;
}
.img_zone img{
  width:100%;
  height:100%;
}
.popmain_body_item_info{
   display:flex;
   flex-direction:column;
}
.popmain_body_item_info .tip{
  margin-top:3px;
  color:#999;
}
.popmain_footer{
  width:100%;
  position:absolute;
  left:0;
  bottom:0;
  right:0;
  margin:0;
}
.popmain_footer button{
  background-color:#e4393c;
  margin:0;
  width:100%;
  height:50px;
  line-height:50px;
  font-size:16px;
  border-radius:0;
  color:#ffffff;
}
</style>