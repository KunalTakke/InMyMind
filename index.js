// imports
import express from "express";
import bodyparser from "body-parser"

// global variables
const app = express();
const port = 3000;


// blogs
let blogs = [] // initialize an empty list
let counter = 0;
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
    // console.log(`using request body ${req.body}`);
    const data = {
        title: req.body.title,
        author: req.body.author,
        image : req.body["article-image"],
        category: req.body.category,
        essay: req.body.essay,
        index: counter
    }
    counter++;
    blogs.push(data);
    console.log(blogs);
    res.render("read.ejs",{blogs});
});

//setting event listeners


// for deleting posts
app.delete("/read",(req,res)=>{
    // when delete button is clicked we pass the logic here to delete a blogs
    console.log("Delete posts");
});

app.patch("/read",(req,res)=>{
    // when update button is clicked we pass the logic here to update the blogs
    
});

app.listen(port,()=>{
    console.log(`Listening to ${port} ... `);
});

