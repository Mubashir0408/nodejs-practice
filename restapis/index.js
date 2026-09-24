const express=require("express")
const users=require("./MOCK_DATA.json")

const app=express();
const port=3000;

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
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
     const user = users.find((user) => user.id === id);
       res.json(user);

});
app.post("/api/users",(req,res)=>{
    //Create new users
    res.json({status:"pending"});
    
app.patch("/api/users:id",(req,res)=>{
    //edit users
    res.json({status:"pending"});

      
app.delete("/api/users:id",(req,res)=>{
    //remove user 
    res.json({status:"pending"});


app.listen(port , ()=>console.log(`server start at ${port}`))
