const Express = require('express');
var app=new Express();
app.get('/',(req,res)=>{
    res.send("welcome to ICTAK");
});

app.get('/home',(req,res)=>{
    res.send("ICT Academy of Kerala");
});
app.listen(3000);