var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs")

app.get("/", function(req,res){
    res.render("home");
});

app.get("/sub/:thing", function(req,res){
    var thingReq = req.params.thing;
    res.render("love",{ thing: thingReq});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "post 1", author: "first"},
        {title: "post 2", author: "second"},
        {title: "post 3", author: "third"}
        ];
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server on..")
});