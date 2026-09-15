const http= require("http");
const fs=require("fs")

const myserver=http.createServer((req,res)=>{
const log=`${Date.now()}:new request received\n`

fs.appendFile("./log.txt",log,(err,data)=>{
    res.end("HELLO")

})
});

myserver.listen(8000,()=>console.log("server started"));
