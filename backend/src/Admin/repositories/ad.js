
const mongodbConfig= require("../../../config/mongodb");

exports.add= async(user)=>{

    const collection= mongodbConfig.getCollection("User")
    try{
        await collection.insertOne({firstName:user.firstName, lastName:user.lastName, email:user.email, phoneNo:user.phoneNo, password:user.password});


    }
    catch(err){
        console.log(err);
       return false;
    }
    return true;
}

exports.getByEmail=async (email)=>{
    const collection=mongodbConfig.getCollection("User");
 
    try{
        const user= await collection.findOne({email});
        return user;
    }
    catch(err){
        console.log(err);
        return null;
    }
    
 }