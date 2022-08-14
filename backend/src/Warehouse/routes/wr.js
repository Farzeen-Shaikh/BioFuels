
const express= require("express")

const controller= require("../controller/wr")

const router= express.Router();

router.get("/",controller.get);
router.put("/", controller.update);

module.exports=router;