import express from "express";

const app = express();
const port = 3000;
// index route
app.get("/",(req,res)=>{
    res.send("Hello World, from imymind!");
});

app.listen(port,()=>{
    console.log(`Listening to ${port} ... `);
});

