
const repo= require("../repositories/pr");
//const repoUser = require('../../Admin/repositories/ad');
const jwt= require("jsonwebtoken");
const Production = require("../model/pr");


exports.login= async(req, res)=>{
    const email= req.body.email;
    const user= await repo.getByEmail(email);
    if(!user || (user.password!= req.body.password)){
        return res.status(400).send("Invalid Credentials");
    }
    else{

        const token= jwt.sign(
            {userid:user._id},
            "THISISPRIVATEKEY",
            {
                expiresIn:"2h"
            }
        );
        return res.status(200).send(token);

    }   
}

exports.add= async(req, res)=>{
    const product = new Production (req.body.type, req.body.quantity, req.body.month);
    const result= await repo.add(product);
    if(result){
        return res.end("Product is added");
    }
    else{
        return res.end("Failed to add Product");
    }
}