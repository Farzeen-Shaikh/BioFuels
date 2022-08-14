
const express= require("express");


const controller= require("../controller/pr")

const router= express.Router();

router.post("/login", controller.login);
router.post("/",controller.add);



module.exports=router;