const Express = require('express');
var bodyParser= require('body-parser');
var app=new Express();
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.get('/',(req,res)=>{
    res.render('home',{'names':["Akhil","Amal","Achu","Appu"]});
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.post('/read',(req,res)=>{
    var body = req.body;
    // res.send(body);
    res.render('read',{bod:body});



});

app.listen(3002);