<template>
    <div class="swiper"
         @touchmove.prevent.stop="handleMove"
    	 @touchstart.prevent.stop="handleStart"
    	 @touchend.prevent.stop="handleEnd">
    	<div class="swiperItemWrap">
    		<slot></slot>
    	</div>
    	<slot name="indicator">
    	 <ul class="indicator-wrap" v-if="indicator&&swiperLen>1">
			<li v-for="i in swiperLen" 
			class="indicator-item"
			:class="i==curIndex?'indicator-active':''"
			@touchstart="changeItem(i)"
			>
			</li>
    	 </ul>
    	</slot>
    	<slot name="btns">
    		<div class="btns" v-if="hasBtn">
    			<span class="pre btn" @touchstart="handlePre"><</span>
    			<span class="next btn" @touchend="handleNext">></span>
    		</div>
    	</slot>
    </div>	
</template>
<script>
export default {
     name:"swiper",
     props:{
     	indicator:{
     		type:Boolean,
     		default:true,
     	},
     	hasBtn:{
             type:Boolean,
             default:false,
     	},
        during:{
        	type:Number,
        	default:100,
        },
        interval:{
            type:Number,
            default:1000,
        },
        Index:{
        	type:Number,
        	default:1
        },
        swiperLen:{
        	  type:Number,
        	  default:null,
        },
        radio:{
        	type:Number,
        	default:0.3
        },
        swiperData:{
              type:Array,
              dafault(){
                 return []
              }
        }

     },
     data(){
         return {
         	curIndex:1,
         	width:"",
         	swiperStyle:"",
         	Timer:null,
         	startX:"",
         	distance:"",
         }
     },
     mounted(){

     },
     methods:{
     	handleDom(callBack){
               let swiper=document.querySelector(".swiper")
               let swiperItems=document.getElementsByClassName("swiperItem")
               console.log("异步处理dom..")
               let swiperItemLast=swiperItems[swiperItems.length-1].cloneNode(true)
               let swiperItemFir=swiperItems[0]
               let cloneFir=swiperItemFir.cloneNode(true)
               let swiperItemWrap=document.querySelector(".swiperItemWrap")
               let swiperWidth=swiper.offsetWidth
               let swiperWrapStyle=swiperItemWrap.style
               swiperItemWrap.appendChild(cloneFir)
               swiperItemWrap.insertBefore(swiperItemLast,swiperItemFir)
               this.width=swiperWidth
               this.swiperStyle=swiperWrapStyle
               // console.log(swiperWidth)
               this.setPos(-this.curIdex*swiperWidth,swiperWrapStyle)
              
     	},
     	startTimer(time){
              this.Timer=setInterval(()=>{
                   this.curIndex++
                   this.scrollContent(this.curIndex)
              },time)
     	},
     	setPos(width,swiperStyle){
     		    // console.log(swiperStyle)
                swiperStyle.transform="translateX("+width+"px)"
     	},
     	scrollContent(curIdx){
     		  // console.log(curIdx)
              this.checkIdx(curIdx)
              this.setPos(-curIdx*this.width,this.swiperStyle)
     	},
     	checkIdx(curIdx){
     		  // console.log(Idx)
     		  // console.log(this.swiperLen)
             this.curIndex=curIdx>this.swiperLen?1:curIdx
              // console.log(this.curIndex)
              // 
     	},
     	handleStart(ev){
     		if(this.Timer){
     			// console.log("定时器关闭。。")
     			window.clearInterval(this.Timer)
     			this.Timer=null
     		}
     		console.log("start..")
            this.startX=ev.touches[0].pageX
     	},
     	handleEnd(){
     		let distance=Math.abs(this.distance)
     		console.log(distance)
     		if(this.distance>0&&distance>this.radio*this.width){
                 this.handlePre()

     		}
     		if(this.distance<0&&distance<this.radio*this.width){
     		    this.handleNext()
     		}
     		this.startTimer(this.interval)
     	},
     	handleMove(ev){
     	    if(this.Timer){
     	    	window.clearInterval(this.Timer)
     	    	this.timer=null
     	    }
     		let moveX=ev.touches[0].pageX
     	    this.distance=moveX-this.startX
     	    // console.log(this.distance)
     	    let width=this.distance-this.curIndex*this.width
     	    console.log(width)
            this.setPos(width,this.swiperStyle)
     	},
     	handlePre(){
           this.curIndex=--this.curIndex<1?this.swiperLen:this.curIndex
            this.setPos(-this.curIndex*this.width,this.swiperStyle)
     	},
     	handleNext(){
             this.curIndex=++this.curIndex>this.swiperLen?1:this.curIndex
             this.setPos(-this.curIndex*this.width,this.swiperStyle)
     	},
     	changeItem(idx){
               this.curIndex=idx
               this.setPos(-this.curIndex*this.width,this.swiperStyle)
     	},
        
     },
     watch:{
        swiperData(){
           setTimeout(()=>{
              this.handleDom()
              this.startTimer(this.interval)
           },20)
        }
    }
}
</script>
<style scoped>
     .swiper{
     	position:relative;
     	overflow:hidden;
     	margin-top:44px;
     }
     .swiperItemWrap{
     	display:flex;
     }
     .indicator-wrap{
     	position:absolute;
     	bottom:20px;
     	left:50%;
     	display:flex;
     	margin-left:-80px;
     }
     .indicator-wrap li{
     	width:20px;
     	height:20px;
     	border-radius:10px;
     	border:1px solid #e3e3e3;
     	box-sizing:border;
        margin-left:10px;
        background-color:#fff;
        list-style:none;
     }
     li.indicator-active{
     	background-color:red;
     }
     .btns{
     	position:absolute;
     	top:0;
     	width:100%;
     	height:100%;
     }
     .btn{
     	height:60px;
     	line-height:60px;
     	width:10%;
     	font-size:36px;
     	color:#fff;
     	text-align:center;
     	background:rgba(123,123,123,.3);
     	position:absolute;
     	top:50%;
     	margin-top:-30px;

     }
     .pre{
      left:0
     }
     .next{
     	right:0;
     }
     .next{
     	margin-left:30%;
     }
</style>	