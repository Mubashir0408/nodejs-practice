const express=require("express")
const users=require("./MOCK_DATA.json")
const mongoose=require("mongoose")
const fs=require("fs");
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

const user=mongoose.model("user",userschema)


app.use((req,res,next)=>{
console.log("Hello from middleware 1")
next();
});
app.use((req,res,next)=>{
console.log("Hello from middleware 2")
next();
});

app.get("/users", (req, res) => {
    const html =
    `<ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>`;

    res.send(html);
});

app.get("/api/users",(req,res)=>{
    
    res.json(users)
})

app.route("/api/users/:id")
.get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    res.json(user);
})

.patch((req,res)=>{
    //edit users
    res.json({status:"pending"});
})
.delete((req,res)=>{
    //remove user
    res.json({status:"pending"});
});
app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "pending" });
  });
});

app.listen(port , ()=>console.log(`server start at ${port}`))
