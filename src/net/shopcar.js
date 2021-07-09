import Axios from "./https"
// console.log(Axios)
let base_url=require("./base_url")
// console.log(base_url)
let urls={
	home_url:"/api/profiles/homepage",
	prod_url:"/api/profiles/productions",
	prolist_url:"/api/profiles/productionsList",
	prodetail_url:"/api/profiles/productionDetail",
}
let getHome=()=>{
	   // console.log(Axios.defaults.base_url)
	    return Axios.get(urls.home_url)
}
let getProd=()=>{
        return Axios.get(urls.prod_url)
}
let getProList=(params)=>{
	     params=params||""
	    return Axios.get(urls.prolist_url+params)
}
let getDetail=()=>{
	    return Axios.get(urls.prodetail_url)
}
export default{
	getHome,
	getProd,
	getDetail,
	getProList,
}