
const repo= require("../repositories/wr")
const Production= require("../../production/model/pr");

exports.get= async(req,res)=>{
    const result= repo.get();
    if (result==-1){
        return res.send("Failed to get product")
    }
    else{
        return res.send(result);
    }
}

exports.update= async(req, res)=>{

    const product = new Production (req.body.type, req.body.quantity, req.body.month, req.body.id);
    const result= await repo.update(product);
    if(result){
        return res.end("Product is updated");
    }
    else{
        return res.end("Failed to update product");
    }

}