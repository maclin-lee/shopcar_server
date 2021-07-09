var express = require('express');
var router = express.Router();
var usersCon=require("../controllers/user.js")
// console.log(usersApi)
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/login",usersCon.login)
router.post("/reg",usersCon.reg)
router.post("/findPas",usersCon.findPas)
router.get("/loginOut",usersCon.logOut)
router.get("/verify",usersCon.verify)
router.get("/getUsers",usersCon.getUsers)


module.exports = router;
