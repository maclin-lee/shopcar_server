import Axios from "./https"
let urls={
	reg:"/api3/users/reg",
	findpas:"/api3/users/findPas",
	login:"/api3/users/login",
	verify:"/api3/users/verify",
	loginOut:"/api3/users/loginOut",
	getUsers:"/api3/users/getUsers",
	adminUrl:"/api3/admin/user",
	freeAdress:"/api3/admin/isfree",
	adminAdress:"/api3/admin",
	deleteUserAddress:"/api3/admin/deleteUser"
}
let getVerify=(email)=>{
	    console.log(email)
        return Axios({
        	method:"get",
        	url:urls.verify,
        	params:{
        		email,
        	}
        })
}
let login=(username,password)=>{
       return Axios({
       	      method:"post",
       	      url:urls.login,
       	      data:{
       	      	username,
       	      	password,
       	      }
       })
}
let findPas=(username,password,verify,email)=>{
	  return Axios({
	  	method:"post",
	  	url:urls.findpas,
	  	data:{
           username,
           password,
           verify,
           email,
	  	}
	  })
}
let loginOut=()=>{
	return Axios({
		method:"get",
		url:urls.loginOut,
	})
}
let getUsers=()=>{
	    // console.log(urls.getUsers)
	    return Axios({
	    	 url:urls.getUsers
	    })
}
let reg=(opts)=>{
	 return Axios({
	 	   url:urls.reg,
	 	   method:"post",
	 	   data:opts,
	 })
}
let getAdmin=()=>{
	return Axios({
            url:urls.adminUrl,
	      })
}
let setFree=(data)=>{
	console.log(data)
	return Axios({
		   method:"post",
		   url:urls.freeAdress,
		   data,
	})
}
let AdminLogin=()=>{
	return Axios({
		   url:urls.adminAdress
	})
}
let deleteUser=(username)=>{
     return Axios({
     	    method:"post",
     	    url:urls.deleteUserAddress,
     	    data:{
     	    	username,
     	    }
     })
}
export default{
	getVerify,
	loginOut,
	getUsers,
	findPas,
	login,
	reg,
	getAdmin,
	setFree,
	AdminLogin,
	deleteUser,
}