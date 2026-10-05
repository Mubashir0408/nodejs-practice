const express=require("express")
const users=require("./MOCK_DATA.json")
const mongoose=require("mongoose")
const { type } = require("os");

const app=express();
const port=3000;
app.use(express.urlencoded({ extended: false }));


 mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
 .then(()=>console.log("mongodb connected"))
.catch((err)=>console.log("mongodb error",err))
//schema
const userschema=new mongoose.Schema ({
  firstname:{
    type:String,
    required:true,
  },

  lastname:{
    type:String,
    
  },
  email:{
    type:String,
    required: true,
    unique:true,
  },
  jobtitle:{
    type:String,
  }
})

const user =mongoose.model("user",userschema)


app.use((req,res,next)=>{
console.log("Hello from middleware 1")
next();
});
app.use((req,res,next)=>{
console.log("Hello from middleware 2")
next();
});

app.get("/users", async(req, res) => {

    const userdb= await user.find({});
    const html =
    `<ul>
        ${userdb.map(user => `<li>${user.firstname}-${user.email}</li>`).join("")}
    </ul>`;

    res.send(html);
});


app.get("/api/users",async(req,res)=>{
     const userdb= await user.find({});
    res.setHeader("X-myname","Mubashir Ejaz")
    res.json(userdb)
})

app.route("/api/users/:id")
.get(async(req,res)=>{

   const User= await user.findById(req.params.id);
    res.json(User);
})
.patch(async(req,res)=>{
     await user.findByIdAndUpdate(req.params.id,{lastname:"changed"});
    res.json({status:"sucess"});
})
.delete(async(req,res)=>{
     await user.findByIdAndDelete(req.params.id);
    res.json({status:"pending"});
});

app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.firstname ||
    !body.lastname ||
    !body.email ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

 const result = await user.create({
  firstname: body.firstname,
  lastname: body.lastname,
  email: body.email,
  jobtitle: body.job_title,
});



console.log("result ",result)
  return res.status(201).json({msg:"sucess"});

});



app.listen(port , ()=>console.log(`server start at ${port}`))
