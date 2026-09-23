const express=require("express")
const data=require("./MOCK_DATA.json")

const app=express();
const port=3000;

app.listen(port , ()=>console.log(`server start at ${port}`))
