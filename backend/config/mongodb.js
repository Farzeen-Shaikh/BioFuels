
const mongodb= require("mongodb");

const mongodbClient= mongodb.MongoClient;

const url= "mongodb+srv://Farzeen:Farzeen8998@cluster0.cnirj.mongodb.net/BiofuelsDb?retryWrites=true&w=majority"; 
var client;

exports.localconnect= async()=>{
    try{
          client =await mongodbClient.connect(url);
           console.log("Db is connected");
       }
       catch(err){
           console.log(err);
       }
}

exports.getCollection=(collectionName)=>{
    return client.db('BiofuelsDb').collection(collectionName);
}