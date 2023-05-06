let db = {}

db.catagory = require("./Catagory");
db.subcatagory = require("./Subcatagory");
db.user = require("./User");
db.role = require("./Role")
db.product = require("./Product")
db.product_catagory_subcatagory = require("./relationshipTables/product_catagory_subCatagory");
db.user_role = require("./relationshipTables/user_role");


db.product.belongsToMany(db.catagory,{
    through:db.product_catagory_subcatagory
})
db.catagory.belongsToMany(db.product,{
    through:db.product_catagory_subcatagory
})
db.product.belongsToMany(db.subcatagory,{
    through:db.product_catagory_subcatagory
})
db.subcatagory.belongsToMany(db.product,{
    through:db.product_catagory_subcatagory,
    foreignKey:"subcatagoryId",
    otherKey:"productId"
})


db.user.belongsToMany(db.role,{
    through:db.user_role,
    foreignKey:"userId",
    otherKey:"roleId"
})
db.role.belongsToMany(db.user,{
    through:db.user_role,
    foreignKey:"roleId",
    otherKey:"userId"
})


module.exports = db;

