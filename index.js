// requiring requirements...
const express = require('express');
const path = require('path');
const {v4: uuidv4} = require('uuid');
var methodOverride = require('method-override');

// creating express app...
const app = express();

// config's for views and static files...
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

// config's for methods - PATCH, DELETE, PUT etc.
app.use(methodOverride('_method'));

// setting port...
const port = 3000;

// listning to requests...
app.listen(port, () => {
    console.log("\nApp is listening.");
})

// config's to work with all types of requests...
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Managing Data...

let posts = [
    {
        id: uuidv4(),
        username: "suraj samgir",
        content: "this is suraj samgir"
    },
    {
        id: uuidv4(),
        username: "piyush samgir",
        content: "this is piyush samgir"
    },
    {
        id: uuidv4(),
        username: "nitin samgir",
        content: "this is nitin samgir"
    }
]

// defining routes...

app.get("/posts", (req, res) => {
    res.render('index.ejs',{posts});
})

app.get("/posts/new", (req, res) => {
    res.render('new.ejs');
})

app.post("/posts", (req, res) => {
    let id = uuidv4();
    let data = req.body;
    posts.push({id: id, username: data.username, content: data.content});
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render('show.ejs',{post});
})

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;

    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);

    res.render('edit.ejs',{post});
})

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);

    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})