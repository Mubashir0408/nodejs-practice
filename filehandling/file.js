const fs=require("fs")
const os=require("os")
console.log(os.cpus().length)
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

fs.cpSync("./apend.txt","./copy.txt")
fs.unlinkSync("./copy.txt")

console.log(fs.statSync("./test.txt").isFile());



