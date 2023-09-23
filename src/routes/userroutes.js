const express =require("express");
const userRoutes=express.Router();
// userRoutes.post("/anand",(req,resp)=>{
userRoutes.get("/anand",(req,resp)=>{
resp.send("i am anand");
});
// userRoutes.post("/kapil",(req,resp)=>{
userRoutes.get("/kapil",(req,resp)=>{
    resp.send("i am kapil");    
    });
    module.exports=userRoutes;