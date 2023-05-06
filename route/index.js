let express = require("express");
app = express();
let router = express.Router();
let userRouter = require("./user.route")
let productRoute = require("./product.route")
let catagoryRoute = require("./category.route")
router.get("/",(req,res,next)=>{
    res.status(200).send("connection successful, you are in base route")
})


router.use("/users",userRouter)
router.use("/products",productRoute)
router.use("/catagories",catagoryRoute)



module.exports = router;