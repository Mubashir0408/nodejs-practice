const express=require("express");
const http=require("http")


const app=express();

app.get("/",(req,res)=>{
  res.send("welcome to home page ")
});


app.get("/about",(req,res)=>{
 return res.send("welcome to about page ")
});


app.get("/search",(req,res)=>{
  return res.send("welcome to search page ")
});


function myhandler(req, res){

}

const myserver = http.createServer(app);

myserver.listen(3000,()=>console.log("server started"))