const express=require("express");
const noteRoutes=express.Router();


noteRoutes.get("/",(req,resp)=>{
resp.send("Note  get request")
})

noteRoutes.post("/",(req,resp)=>{
    resp.send("note get responce")

})
module.exports=noteRoutes;