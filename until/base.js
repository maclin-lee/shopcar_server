let crypto=require("crypto")
let setCrypto=(info)=>{
     return crypto.createHmac("sha256","%$#$%$$DF")
     .update(info).digest("hex")
}
module.exports={
	setCrypto,
}