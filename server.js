const e = require("express");
const express = require("express");
const app = express();
app.use(express.json());
const port = 4000;
const mongoose = require("mongoose");
const { off } = require("./models/user");

const userModel = require("./models/user");
mongoose
.connect("mongodb://localhost:27017/practical-11")
.then(()=> console.log('Mongo DB Connected!!'));

app.get("/api/",(req,res)=> res.send("Hello User !"));


//Register
app.post("/api/registration",async (req,res)=>{
    const newUser1 = req.body;
    const user = await userModel.findOne(newUser1);
    if(user)
    {
        res.json({data:"Username already Exists!"});
    }
    else
    {
        userModel.create(newUser1);
        return res.json({data:"Registration Successfull"}); 
    }
});

//Login
app.post("/api/login",async (req,res)=>{
    const data = req.body;
    //const pass = req.body.password;
    const user = await userModel.find(data);
    if(user)
    {
        return res.json({data:user});        
    }
    return res.json({data:"Not"});
});

//Search
app.post("/api/search",async(req,res)=>{
    const data = req.body;
    const user = await userModel.find(data);
    if(user)
    {
        return res.json({data:user});
    }
    return res.json({data:"Not Data Found"});
});
//Delete
app.delete("/api/delete:username",async(req,res)=>{
    const data = req.params.name;
    const deleteuser = await userModel.findOneAndDelete({username:data});
    return res.json({data:"Delete!"});
});

app.listen(port,()=> console.log('Server Running on Port 4000'));
