import Axios from "axios"
import Vue from "vue"
// console.log(Axios)
let AxiosIn=Axios.create()
// console.log(AxiosIn)
AxiosIn.defaults={
	headers:{
		post:{
		   "Content-Type":"application/x-www-form-urlencoded"
		}
	},
}
AxiosIn.interceptors.request.use(
	(config)=>{
		let token=window.localStorage.getItem("token")
		token&&(axios.header.Autorization=token)
		return config
         },
    (error)=>{
    	Promise.reject(error)
})
AxiosIn.interceptors.response.use(
	res=>{
	     if(res.status==200){
	     return	Promise.resolve(res)
	     }else{
	     return	Promise.reject(res)
	     	// console.log(error)
	     }
},error=>{
	     console.log(error.response.status)
         let {response}=error
         switch(response.status){
              case 401:
              console.log("未登入")
              break;
              case 404:
              console.log("页面不存在")
              break;
              case 403:
              console.log("token 登入过期")
              break;
              default:
              console.log("qita..")
         }
})
// console.log(AxiosIn)
export default AxiosIn
