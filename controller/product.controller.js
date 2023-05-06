const db = require("../model");

let addProduct = async (req,res,next)=>{
    let {name,price,catagory,subcatagory,companyname}= req.body;
    let productSubCatagory;
    let productCatagory;
    productCatagory = await db.catagory.findOne({where:{
        name:catagory
    }})
    if(!productCatagory){
        productCatagory = await db.catagory.create({
            name:catagory
        })
    }
    if(subcatagory){
            productSubCatagory = await db.subcatagory.findOne({
            where:{
                name:subcatagory
            }
        })
        if(!productSubCatagory){
            productSubCatagory = await db.subcatagory.create({
                name:subcatagory
            })
        }
    }else{
        productSubCatagory = await db.subcatagory.findOne({
            where:{
                name:"other"
            }
        })
    }


    let product = await db.product.create({
        name:name,
        price:price,
        companyname:companyname
    });

    await db.product_catagory_subcatagory.create({
        productId:product.id,
        catagoryId:productCatagory.id,
        subcatagoryId:productSubCatagory.id
    })

        
    // await product.setCatagories(productCatagory);
    // await product.addSubcatagory(productSubCatagory);

    res.status(200).json({
        product:name,
        catagory:catagory,
        subcatagory:subcatagory || "other",
        companyname:companyname,
        price:price,
        message: "product added"
    }).end();
}


let getProductById = async (req,res,next)=>{
    let productId = req.params.productId;
    let product = await db.product.findByPk(productId,
       { attributes:["name","price"],
        include:[{
            model:db.catagory,
            attributes:["name"],
            through:{
                attributes:[]
            }
        },{
            model:db.subcatagory,
            attributes:["name"],
            through:{
                attributes:[],
            }
        }
                    
    ]});

    res.status(200).json(product).end();

}
let getAllProduct = async (req,res,next)=>{

}

module.exports = {
    addProduct,
    getProductById,
    getAllProduct
}