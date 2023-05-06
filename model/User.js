const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

module.exports = db.define("users",{
    id:{
        type:DataTypes.BIGINT,
        notNull:true,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{type:DataTypes.STRING,
        notNull:true,
    },
    username:{
        type:DataTypes.STRING,
        notNull:true,
        unique:true
    },
    email:{
        type:DataTypes.STRING,
        notNull:true,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        notNull:true,
    }
},
{
    freezeTableName:true,
})