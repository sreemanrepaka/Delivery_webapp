const express=require("express");
const ejs=require("ejs");
const path=require('path');
const favicon=require('serve-favicon');
const app=express();
const mysql = require('mysql2');
const port=3000;
app.use(express.static(path.join(__dirname , 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.set('view engine', 'ejs');
app.listen(port);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'srimaan9',
    database: 'delwr'
  })
  

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
    
    
})

app.get("/form_response", function(req,res){
    tracking_id=req.query.trackbar;
    connection.query("SELECT * FROM TRACK WHERE TRACKING_NO="+tracking_id,function(err,result){
       
        try {
            console.log(result);
            var parsedResult = JSON.parse(JSON.stringify(result));
            var id=parsedResult[0].tracking_no;
            var item_name=parsedResult[0].item_name;
            var location=parsedResult[0].location;
            var date=parsedResult[0].ETA;
            console.log(id);
            res.render("form_response", {id:id, item_name:item_name, location: location, date: date});
        }

        catch (err){
            //res.render("form_response",{order_details:"Order tracking ID doesnt exist. Type a valid tracking ID"});
            console.log("error");
            
  
        }
      })
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
