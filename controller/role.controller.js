const db = require("../model");

let insertRoles = async ()=>{
   try {await db.role.bulkCreate([
        {
        name:"admin"
        },
        {
        name:"user"
        },
        {
        name:"superuser" 
        }
]);
    console.log("roles inserted successfully")
}catch(err){
    console.log(err)
}
}

module.exports = {insertRoles}
