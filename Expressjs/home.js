const Express = require('express');
var app=new Express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('home',{'names':["Akhil","Amal","Achu","Appu"]});
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.listen(3002);