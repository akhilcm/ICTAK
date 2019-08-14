const Express = require('express');
var app=new Express();
app.set('view engine','ejs');
// app.get('/',(req,res)=>{
//     res.render('index');
// });



app.get('/',(req,res)=>{
    res.render('index',{'title':'ICTAK','names':["Akhil","Amal","Achu","Appu"]});
});

app.listen(3001);