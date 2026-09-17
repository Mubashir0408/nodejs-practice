const http= require("http");
const fs=require("fs")

const myserver =http.createServer((req,res)=>{
const log=`${Date.now()}:new request received\n`

fs.appendFile("./log.txt",log,(err,data)=>{
    switch(req.url){
        case "/":
            res.end("home page");
            break;
    case "/about":
           res.end("about page")
              break;  
    default:
        res.end("404")}
              

})
});

myserver.listen(8000,()=>console.log("server started"));
