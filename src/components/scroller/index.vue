<template>
    <div ref="wrapper" class="wrap" :class="vertical?'wrapperH':'wrapperW'">
    	<slot></slot>
    </div>	
</template>
<script>
import BScroll from "better-scroll"
export default {
     name:"scroller",
     props:{
        click:{
         	type:Boolean,
         	default:true,
         },
         beforeScroll:{
             type:Boolean,
             default:false,
         },
         scrollX:{
            type:Boolean,
            default:false,
         },
         listenScroll:{
         	 type:Boolean,
         	 default:true
         },
         vertical:{
         	 type:Boolean,
         	 default:true,
         },
         pullUpLoad:{
         	  type:Boolean,
         	  default:true
         },
         probeType:{
         	   type:Number,
         	   default:2
         },
         pullDownLoad:{
         	   type:Boolean,
         	   default:true,
         },
         data:{
         	type:Array,
         	default(){
         		return []
         		
         	}
         }

        
     },
     data(){
         return{
         	scroll:{}
         }
     },
     mounted(){
          // console.log(document.getElementsByClassName("wrap"))
          this._initScroll()
     },
     methods:{
     	_initScroll(){	
             this.scroll=new BScroll(this.$refs.wrapper,{
                    click:this.click,
                    scrollY:this.vertical,
                    scrollX:this.scrollX,
                    probeType:this.probeType,
             })
             // console.log(this.vertical)
             if(this.listenScroll){
             	   this.scroll.on("scroll",(pos)=>{
             	   	// console.log(pos.y)
             	   this.$emit("scroll",pos)
                })
             }
             if(this.pullUpLoad){
             	  this.scroll.on("scrollEnd",()=>{
                     if(this.scroll.y<=this.scroll.maxScrollY+50){
             	  	    console.log("结束滚动。。。")

                          this.$emit("pullUpLoad")   
                      }
             	  })
             }
             if(this.pullDownLoad){
             	  this.scroll.on("touchEnd",(pos)=>{
             	    // console.log(pos.y)  
             	  	   if(pos.y>=50){
             	  	   	  console.log("下拉操作。。")
                           this.$emit("refreshDown")
             	  	   }
             	  })
             }
             if(this.beforeScroll){
                  this.scroll.on("beforeScrollStart",()=>{
                  	  this.$emit("beforeScroll")
                  })
             }
             
     	},
     	disable(){
     		 this.scroll&&this.scroll.disable()
     	},
     	enable(){
     		this.scroll&&this.scroll.enable()
     	},
     	scrollToElement(el,time,x,y,easing){
            this.scroll&&this.scroll.scrollToElement(el,time,x,y,easing)
     	},
     	scrollTo(x,y,time,easing){
            this.scroll&&this.scroll.scrollTo(x,y,time,easing)
     	},
     	destroy(){
            this.scroll&&this.scroll.destroy()
     	},
     	refresh(){
     	  	this.scroll&&this.scroll.refresh()
        
     	}
     },
     watch:{
     	data(){
           setTimeout(()=>{
                // console.log(this.scroll)
                 this.refresh()
     		},20)
     	}
     }        
}
</script>
<style scoped>
     .wrapperH{
        height:calc(100vh - 93px);
        overflow:hidden;
     }
     .wrapperW{
        overflow:hidden;
        width:100vw;
     }
</style>