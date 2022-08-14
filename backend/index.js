const express = require('express')
const mongodb= require("./config/mongodb")
const userRoutes=require("./src/Admin/routes/ad");
const productionRoutes= require('./src/production/routes/pr')
const warehouseRoutes= require('./src/Warehouse/routes/wr')
const bodyParser= require('body-parser');
const cors= require('cors')

const server= express()

server.listen(4900)
server.use(cors());

mongodb.localconnect();

server.use(bodyParser.json());
server.use("/api/user", userRoutes);
server.use("/api/production", productionRoutes);

server.use("/api/warehouse",warehouseRoutes);

server.get("/",(req,res)=>{
    res.send("Hello World From Express");
});

console.log("Server is listening on 4900");