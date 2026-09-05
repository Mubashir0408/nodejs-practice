const fs=require("fs")

fs.writeFileSync("test.txt","hi there")

const result=fs.readFileSync("./contact.txt","UTF-8")
console.log(result)

fs.readFile=fs.readFile("./contact.txt","UTF-8",(err,result)=>{

    if(err){
        console.log("error",err)
    }else{
        console.log(result)
    }
})

fs.appendFileSync("./apend.txt",`hey there\n`)