const { DataTypes } = require("sequelize");
let db = require("../config/db.config");

module.exports = db.define("products",{
    id:{
        primaryKey:true,
        notNull:true,
        type: DataTypes.BIGINT,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        notNull:true},
        companyname:{
            type:DataTypes.STRING,
            notNull:true,
        },
    price:{
        type:DataTypes.DECIMAL,
        notNull:true,}
},{
    freezeTableName:true,
    timestamps:false,
})