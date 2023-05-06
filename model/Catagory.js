const { DataTypes } = require("sequelize")
let db = require("../config/db.config")


module.exports = db.define("catagories",{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
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
    timestamps:false
})