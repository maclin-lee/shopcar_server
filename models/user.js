let mongoose=require("mongoose")
let usersSchema=mongoose.Schema({
	username:{
        type:String,
        required:true,
        unique:true,
	},
	isAdmin:{
        type:Boolean,
        default:false,        
	},
	isFree:{
        type:Boolean,
        default:false,
	},
	password:{
        type:String,
        required:true,
	},
	email:{
         type:String,
         required:true,
         unique:true,
	},
    date:{
    	type:Date,
    	default:new Date()
    },
    img_url:{
    	type:String,
    }
})
let userModel=mongoose.model("user",usersSchema)
// userModel.createIndexes()
let save=(data)=>{
	   // console.log(data)
	   let useDoc=new userModel(data)
	   console.log(useDoc)
	  return useDoc.save().then(()=>{
	  	   return true
	  }).catch(()=>{
	  	  return false
	  })
}
let search=(username,password)=>{
     return userModel.findOne({username:username,password:password})      
}
let updatePass=(username,password)=>{
	 console.log(username)
	  return userModel.updateOne({username:username},{
	  	  $set:{
	  	  	password:password
	  	  }}).then(()=>{
	  	return true
	  }).catch(()=>{
	  	 return false
	  })

}
let getAdminList=()=>{
	  return userModel.find()
}
let updateData=(username,isFree)=>{
        return userModel.updateOne({username},{
        	$set:{
        		isFree:isFree}
        }).then(()=>{
           return true
        }).catch(()=>{
        	return false
        })
}
let deleteUser=(username)=>{
       return userModel.deleteOne({username}).then(()=>{
       	  return true
       }).catch(()=>{
       	  return false
       })
}
module.exports={
	save,
	search,
	updatePass,
	getAdminList,
	updateData,
	deleteUser,
}

