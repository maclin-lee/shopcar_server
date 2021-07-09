let mongoose=require("mongoose")
let nodeMailer=require("nodemailer")
let Mongoose={
	url:"mongodb://localhost:27017/shopcar_data",
	connect(){
		mongoose.connect(this.url,(error)=>{
			if(error){
				console.log(error)
                console.log("数据库链接失败")
                return;
			}
			// console.log(error)
			console.log("数据库链接成功。。")
		})
	}
}
let Email={
	  options:{
	  	  host:"smtp.qq.com",
	  	  port:587,
	  	  auth:{
	  	  	user:"3350592218@qq.com",
	  	  	pass:"eiagguezllrddcaa"
	  	  }
	  },
	   get transporter(){
           return nodeMailer.createTransport(this.options)
	  },
	   get verify(){
	   	   let data=Math.random().toString().slice(2,8)
	   	   console.log(data)
	   	   return data;
	   },
	   get preTime(){
	   	  return new Date().getTime()
	   }
}

module.exports={
	Mongoose,
	Email,
}