const express=require("express");
const path=require('path');
const app=express();
app.use(express.static(path.join(__dirname + "/public")));
const port=3000;
app.listen(port);

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html");
})

app.get("/contact",function(req,res){
    res.sendFile(__dirname+"/contact.html");
})

app.get("/portfolio",function(req,res){
    res.sendFile(__dirname+"/portfolio.html");
})

app.get("/pricing",function(req,res){
    res.sendFile(__dirname+"/pricing.html");

})

app.get("/services",function(req,res){
    res.sendFile(__dirname+"/services.html");
})
