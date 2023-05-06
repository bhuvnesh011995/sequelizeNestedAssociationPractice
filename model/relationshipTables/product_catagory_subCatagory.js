const { DataTypes } = require("sequelize");
const db = require("../../config/db.config");

module.exports = db.define("product_catagory_subcatagory",{
    productId:{type:DataTypes.BIGINT},
    catagoryId:{type:DataTypes.BIGINT},
    subcatagoryId:{type:DataTypes.BIGINT}
},{
    freezeTableName:true,
    timestamps:false
})