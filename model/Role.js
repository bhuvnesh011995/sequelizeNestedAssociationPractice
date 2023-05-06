const { DataTypes } = require("sequelize");
let db = require("../config/db.config");


module.exports=db.define("roles",{
    id:{
        type:DataTypes.BIGINT,
        notNull:true,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        notNull:true,
        unique:true
    }
},{
    freezeTableName:true,
    timestamps:false,
})


