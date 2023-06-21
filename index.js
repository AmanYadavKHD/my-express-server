//jshint esversion:6

const express=require("express");
const app=express();

app.get("/", function(request,response){
    response.send("Hello Mitar.")
});
app.get("/contact",function(req,res){
res.send("contact me at raoaman.1539@gmail.com")
});
app.get("/about",function(req,res){
res.send("Myself Rao Sahab.")
});
app.get("/hobbies",function(req,res){
res.send("<ul><li>Dudh</li><li>Ghee</li><li>Dhai</li></ul>")
});
app.listen(3000, function(){
    console.log("Server started at 3000.")
});
