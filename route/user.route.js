let express = require("express")
let router = express.Router()
let userController = require("./../controller/user.controller")


express().use((req,res,next)=>{
    res.header("Access-Control-Allow-Header",
    "x-access-token","origin","Content-Type","Accept");
    next();});

router.post("/signUp",userController.signUp)
router.post("/logIn", userController.logIn)


module.exports = router