const { DataTypes } = require("sequelize");
const db = require("../../config/db.config");

module.exports = db.define("user_role",{
    userId:{type:DataTypes.BIGINT},
    roleId:{type:DataTypes.BIGINT}
})