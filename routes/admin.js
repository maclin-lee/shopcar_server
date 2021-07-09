let express=require("express")
let router=express.Router()
let adminCon=require("../controllers/admin")
router.use((req,res,next)=>{
	console.log(req.session)
     if(req.session.username&&req.session.isAdmin){
     	 next()
     }else{
     	res.send({
     		msg:"没有管理元权限",
     		status:-1
     	})
     }
})
router.get("/",adminCon.index)
router.get("/user",adminCon.getAdminList)
router.post("/isfree",adminCon.updateData)
router.post("/deleteUser",adminCon.deleteUser)
module.exports=router