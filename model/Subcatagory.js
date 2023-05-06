const { DataTypes } = require("sequelize");
const db = require("../config/db.config");


module.exports = db.define("subcatagories",{
    id:{
        type:DataTypes.BIGINT,
        notNull:true,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING,
        notNull:true,
        defaultValue:"other",
        unique:true
    }
},{
    freezeTableName:true,
    timestamps:false,
})