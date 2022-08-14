
const mongodbConfig= require("../../../config/mongodb")
const objectId= require("mongodb").ObjectId;

exports.get=async()=>{
    const collection= mongodbConfig.getCollection("Production")

    try{
        const result= await collection.find().toArray();
        console.log(result);
        return result
    }

    catch(err){
        console.log(err)
        return -1
    }
}

exports.update=async(production)=>{
    const collection= mongodbConfig.getCollection("Production");
    try{
        const filter= {_id:objectId(production._id)};
        const update={$set: {type:production.type, quantity:production.quantity, month:production.month}};
        await collection.findOneAndUpdate(filter, update);

    }
    catch(err){
        console.log(err);
        return false;

    }

    return true;
}
