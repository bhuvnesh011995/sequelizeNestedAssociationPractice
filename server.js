let config = require("./config/server.config")
let express = require("express");
const { insertRoles } = require("./controller/role.controller");
const db = require("./config/db.config");
let app = express();
let router = require("./route/index")
let bodyParser = require("body-parser");


app.use(bodyParser.json())
app.use(router)

app.listen(config.PORT,async ()=>{
    console.log(`server started at port ${config.PORT}`)
    // await db.sync({force:true})
    // await insertRoles();
})