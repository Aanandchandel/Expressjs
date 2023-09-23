const express =require('express');
const app=express();
// const quotes=require("./quotes.json");
const userRoutes=require("./routes/userroutes");
const noteRoutes=require("./routes/noteroutes");
const mongoose =require("mongoose");
app.use("/note",noteRoutes);
 app.use("/user",userRoutes);

// app.get("/json",(req,resp)=>{
//     resp.status(200).json(quotes);  
// })

app.get("/",(req,resp)=>{
    resp.send("i am home")
})
 
// eroor ...................................................
mongoose.connect("")
.then(()=>{
    app.listen(8000,()=>{console.log("Server is running on 8000");}
)
console.log("helooo anand");

})
.catch((error)=>{
    console.log(error)
})

