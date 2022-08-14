

const repo= require("../repositories/ad");
const User= require("../model/ad");
const jwt= require("jsonwebtoken");

exports.register= async(req,res)=>{
    const user=new User(req.body.firstName, req.body.lastName, req.body.email, req.body.phoneNo, req.body.password);
    const result= await repo.add(user);

    if(result){
        return res.end("User is added");
    }
    else{
        return res.end("Failed to add User");
    }


}

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
