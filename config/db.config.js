let sequelize = require("sequelize")


let db = new sequelize(
    "brijeshdb",
    "root",
    "2006",{
        host:"localhost",
        dialect:"mysql",
        operatorAliases:false,
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        }
    }
)

try {
    db.authenticate();
    console.log("db connection establish")
}catch(err){
    console.log(err)
}

module.exports = db;