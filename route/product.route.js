let express = require("express");
let productController = require("../controller/product.controller");

let router = express.Router()

router.post("/",productController.addProduct)
router.get("/:productId",productController.getProductById)



module.exports = router;