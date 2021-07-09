let {Email}=require("../until/config.js")
let model=require("../models/user.js")
let {setCrypto}=require("../until/base")
let login=async(req,res,next)=>{
       let {username,password}=req.body
       // console.log(setCrypto(password))
       let result=await model.search(username,setCrypto(password))
       console.log(result)
       if(result){
       	   req.session.username=username
           req.session.isAdmin=result.isAdmin
           // console.log(result.isFree)
           if(!result.isFree){
              res.send({
                msg:"登入成功",
                status:1,
                data:{
                  username,
                  isAdmin:req.session.isAdmin
                 }
               })
           }else{
             res.send({
                msg:"已冻结，登入失败",
                status:-1
             })
           }
       	   
           // console.log(req.session)
       }else{
       	res.send({
       		msg:"登入失败",
       		status:0
       	 })
       }
}
var reg=async(req,res,next)=>{
      let {email,username,password,verify}=req.body
       console.log(req.session,req.body)
      if(email!==req.session.email||verify!==req.session.verify){
             res.send({
             	msg:"你输入的验证码有误",
             	status:-1
             })
      }else{
        // console.log(model)
        let result=model.save({
        	email,
        	username,
          password:setCrypto(password)
        })  
        if(result){
        	res.send({
          	  msg:"注册成功",
          	  status:1
          })
        }else{
           res.send({
              msg:"注册失败",
              status:0
           })
        }
      }

}
let findPas=async(req,res,next)=>{
     let {username,password,email,verify}=req.body
     console.log(req.session)
     if(email==req.session.email&&verify==req.session.verify){
     	let result=await model.updatePass(username,setCrypto(password))
        // console.log(result)
     	  if(result){
                res.send({
                	msg:"修改密码成功",
                	status:1
                })
     	  }else{
              res.send({
              	  msg:"修改密码失败",
              	  status:0
              })
     	  }
     }else{
     	res.send({
     		msg:"验证失败",
     		status:-1
     	})
     }
}
let preTime=Email.preTime
let Pass=Email.verify
var verify=async(req,res,next)=>{
     let email=req.query.email
     // console.log(preTime)
     // req.session.preTime=preTime
     let session=req.session
     session.verify=Pass
     session.email=email
     console.log(req.session)
     let transporter=Email.transporter
     let curTime=new Date().getTime()
     // console.log(curTime-preTime)
     if((curTime-preTime)/1000>=60){
     	preTime=curTime
     	Pass=Email.verify
     	req.session.verify=Pass
     	// console.log(Email.verify)
     	res.send({
     		msg:"你的验证码过期,请从新输入新的验证码",
     		status:-3,
     	})
     // return;
     }

    transporter.sendMail({
     	  from:"3350592218@qq.com",
     	  to:email,
     	  subject:"发邮件",
     	  text:req.session.verify,
     },(error)=>{
     	 // console.log(error)
     	 if(!error){
     	 	res.send({
     	 		msg:"邮箱发送成功。。",
          status:1
     	 	})
     	 }else{
     	 	res.send({
     	 		msg:"发送邮箱失败",
          status:0
     	 	})
     	 }
     })
  // console.log("发送弥漫")
}
let logOut=async(req,res,next)=>{
       req.session.username=""
       res.send({
       	msg:"已退出",
       	status:1
       })
}
let getUsers=async(req,res,next)=>{
	  console.log(req.session)
      if(req.session.username){
      	res.send({
      		msg:"已登入",
      		status:1,
      		data:{
      			username:req.session.username,
            isAdmin:req.session.isAdmin
      		}
      	})
      }else{
      	res.send({
      		msg:"请登入",
      		status:0
      	})
      }
}

module.exports={
	login,
	reg,
	findPas,
	verify,
	logOut,
	getUsers,
}