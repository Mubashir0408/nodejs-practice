const express=require("express")
const users=require("./MOCK_DATA.json")

const app=express();
const port=3000;
app.use(express.urlencoded({ extended: false }));

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
app.post("/api/users",(req,res)=>{
    const body=req.body;
    console.log("body",body)
    
    res.json({status:"pending"});
})

app.listen(port , ()=>console.log(`server start at ${port}`))
