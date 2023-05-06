const db = require("../model");


let addCatagory = async (req,res,next)=>{
    let {name} = req.body
       await db.catagory.create({
            name:name
        });
    
    res.status(200).json({
        success : true,
        catagory:name,
    }).end();
}
let deleteCatagoryById = async (req,res,next)=>{
    if(await db.catagory.findByPk(req.params.catagoryId)){
        await db.catagory.destroy({where:{
            id:req.params.catagoryId
        }});
        res.status(200).json({
            success:true,
            message:"catagory deleted"
        })
    }else{
        res.status(404).json({
            success:false,
            message:"catagory not found"
        })
    }
}



module.exports ={
    addCatagory,
    deleteCatagoryById

}