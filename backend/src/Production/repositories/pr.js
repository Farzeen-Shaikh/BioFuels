
const mongodbConfig = require("../../../config/mongodb")

exports.add= async(production)=>{
    const collection= mongodbConfig.getCollection("Production");
    try{
        await collection.insertOne({type:production.type, quantity:production.quantity, month:production.month});
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