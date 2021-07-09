<template>
   <div class="count-btns">
   	  <input type="button" @click="handleRe" class="btn incr" value="-">
   	  <input type="text" class="text" v-model="Count" 
      @change="handleInput">
   	  <input type="button" @click="handleIn" class="btn redu" value="+">
   </div>	
</template>
<script>
export default {
     name:"countbtns",
     props:{
     	count:{
     		  type:Number,
     		  default:1
     	}
     },
     data(){
           return{
             Count:this.count
           }
     },
     methods:{
      handleRe(){
         let count=this.Count
         this.Count=--count<1?1:count
         this.$emit("redc",this.Count)
      },
      handleIn(){
        this.Count++
        this.$emit("incr",this.Count)
      },
      handleInput(){
        let count=this.Count<=0?1:this.Count
         this.Count=count
         this.$emit("input",this.Count)
         // console.log("37882")
      }
     }     
}
</script>
<style scoped>
   .count-btns{
   	  display: flex;
   	  flex: 1;
   }
   input{
   	    /*height: 30px;*/
   	    line-height: 30px;
   	    text-align: center;
   	    font-size: 30px;
   	    min-width: 30px;
   	    border-radius: none;
        background-color: #fff;
   	    border: none;
   }
   input.btn{
       background-color: rgba(211,211,211,.1);
   }
   .count-btns input.incr{
   	 border-left: 1px solid rgba(211,211,211,.1);
   	 border-top: 1px solid rgba(211,211,211,.1);
   	 border-bottom: 1px solid rgba(211,211,211,.1)
   }
   .count-btns .text{
            /*min-width: 30px;   */
   }
</style>	