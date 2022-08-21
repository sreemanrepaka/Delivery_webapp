const express=require("express");

const app=express();
app.use(express.static(__dirname + "/style.css"));
const port=3000;
app.listen(port);

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");

})
