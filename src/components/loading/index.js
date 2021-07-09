import load from "./loading.vue"
import Vue from "vue"
let loading=(function(){
      let insLoad=null
      let defaults={
      	isLoad:false,
      	url:""	
      }
      return function(config){
      	  for(var i in config ){
      	  	 defaults[i]=config[i]
      	  }
         if(insLoad) return;
         let LoadClass=Vue.extend(load)
         insLoad=new LoadClass({
               el:document.createElement("div"),
               data(){
               	    return {
               	    	 isLoad:defaults.isLoad,
               	       url:defaults.url
               	    }
               },
           })
         // console.log(insLoad)
         document.body.appendChild(insLoad.$el)
         return insLoad

      }
})()
export {loading,}