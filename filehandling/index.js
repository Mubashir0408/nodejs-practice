const http= require("http");

const myserver=http.createServer((req,res)=>{

    console.log("new req rec")
    res.end("HELLO")
});

myserver.listen(3000,()=>console.log("server started"));
