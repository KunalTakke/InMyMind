// imports
import express from "express";
import bodyparser from "body-parser"

// global variables
const app = express();
const port = 3000;

// telling app to look for static files in public 
app.use(express.static("public"));

// using bodyparser to parse req and res body
app.use(bodyparser.urlencoded({extended: true}));

// index page or home page
app.get("/",(req,res)=>{
    res.render("index.ejs");
});

// for read blog
app.get("/read",(req,res)=>{
    res.render("read.ejs");
});
// for about page
app.get("/about",(req,res)=>{
    res.render("about.ejs");
});
// for viewing /write route
app.get("/write",(req,res)=>{
    res.render("write.ejs");
});

// for posting on write blog
app.post("/write",(req,res)=>{
    console.log(req.body);
    res.render("index.ejs");
});



app.listen(port,()=>{
    console.log(`Listening to ${port} ... `);
});

