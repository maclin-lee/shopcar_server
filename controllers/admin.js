let model=require("../models/user")
let index=(req,res,next)=>{
      res.send({
      	msg:"管理员登入成功",
      	status:1,
      	data:{
      		username:req.session.username,
      		isAdmin:req.session.isAdmin
      	 },
      })
}
let getAdminList=async(req,res,next)=>{
      let result=await model.getAdminList()
      if(result){
      	 res.send({
      	 	msg:"查询数据成功",
      	 	data:result,
      	 	status:1
      	 })
      }else{
      	res.send({
      		msg:"数据库中没有数据",
      		status:0
      	})
      }
}
let updateData=async(req,res,next)=>{
          let {username,isFree}=req.body
          // console.log(username,isFree)
          let result=await model.updateData(username,isFree)
          console.log(result)
          if(result){
               res.send({
               	 msg:"冻结操作成功",
               	 status:1,
               })
          }else{
          	 res.send({
          	 	  msg:"冻结操作失败",
          	 	  status:0
          	 })
          }

}
let deleteUser=async(req,res,next)=>{
	     let {username}=req.body
         let result=await model.deleteUser(username)
         if(result){
               res.send({
               	  msg:"删除成功",
               	  status:1
               })
         }else{
              res.send({
              	  msg:"删除失败",
              	  status:-1,
              })
         }
 }
module.exports={
	index,
	getAdminList,
	updateData,
	deleteUser,
}