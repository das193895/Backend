require("dotenv").config;
const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.get("/twitter",(req,res)=>{
    res.send("twitter url");
})

app.get("/login",(req,res)=>{
    res.send("login url clicked");
})

app.listen(process.env.port , () => {
    console.log(`app is listening on port ${port}`);
})