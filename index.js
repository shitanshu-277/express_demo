const express=require('express');
const app=express();
const PORT=3000;
app.get('/',function (req,res){
    res.send("hello world");
});
app.post('/home',function(req,res){
    res.send("Welcome to home");
})
app.patch('/home',function (req,res){
    //res.send("This is a patch request");
    res.json({
        message:"This is a patch request",
        success:true
    })
})
app.listen(PORT,function process(){
    console.log("Server Started");
});