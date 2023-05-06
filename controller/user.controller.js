let db = require("./../model/index")
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")

let user = db.user;



let signUp = async (req,res,next)=>{
    try{let {name,email,username,password,role} = req.body;
    let userDetail = await user.findOne({where:{username:username}})
    if(userDetail){    
       let roles = await userDetail.getRoles();
        for(i=0;i<roles.length;i++){
            if(roles[i].name==role){
                let err = new Error(`user already exist as ${role}`);
                err.statusCode=404;
                throw err;
            }
        }
       let userRole = await db.role.findOne({where:{name:role}})
       await userDetail.addRole(userRole)

        res.status(200).send(JSON.stringify({
            namename:username,
            role:role,
            message:`signUp successful as ${role}`
        },null,2)).end()
    }else{
        userDetail = await user.create({
        name:name,
        username:username,
        email:email,
        password:bcrypt.hashSync(password,8)
});
    let userRole = await db.role.findOne({where:{
        name:role
    }});
    await userDetail.addRole(userRole);
    res.status(200).json({
        name:name,
        message: "signUp successful",
        role:userRole.name
     })}}catch(err){
        res.status(err.statusCode).send(err.message)
     }
    
}

let logIn = async (req,res,next)=>{
let {username,password,role} = req.body;
let person = await user.findOne({where:{username:username}})
if(!person){
    let err = new Error("user not found")
    err.statusCode= 404;
    throw err;
}
let isValid = bcrypt.compareSync(password,person.password);
if(!isValid) {
    let err = new Error("incorrect username or password");
    err.statusCode = 404;
    throw err;
}
let token = jwt.sign({id:person.id},process.env.secretKey,{expiresIn:"30d"})
res.status(200).json({
    id : person.id,
    role:role,
    accessToken :token
})
}


module.exports = {
                    signUp,
                    logIn
                    }