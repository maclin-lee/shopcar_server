import toast from "./toast"
import Vue from "vue"
let Toast=(function(){
        let defaults={
        	title:"弹框",
        	content:"弹框内容",
        	success:"确定",
        	fail:"取消",
          handleSuc(){

            },
          handleFail(){

            }
        }
        let ToastObject=null
        return function(config){
           for(var i in config){
           	   // console.log(typeof config)
               defaults[i]=config[i]
           }
           // if(ToastObject)return ToastObject;
           let ToastFun=Vue.extend(toast)
               ToastObject=new ToastFun({
               el:document.createElement("div"),
               data(){
                  return {
                        title:defaults.title,
                        content:defaults.content,
                        sucs:defaults.success,
                        fails:defaults.fail,
                        isToast:defaults.isToast,
                  }
               },
               methods:{
                    success(){
                      defaults.handleSuc&&defaults.handleSuc()
                      document.body.removeChild(ToastObject.$el)
                    },
                    fail(){
                        defaults.handleFail&&defaults.handleFail()
                        document.body.removeChild(ToastObject.$el)
                    },
               },
           })
           document.body.appendChild(ToastObject.$el)
           return ToastObject
        }
})()
export {Toast,}