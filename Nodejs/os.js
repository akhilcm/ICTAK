// const myos=require('os');
// var userdata=myos.userInfo();
// var platform=myos.platform();
// console.log(userdata.username+"uses"+platform);


const myos=require('os');
const myfs=require('fs');
var userdata=myos.userInfo();
var platform=myos.platform();
myfs.appendFile("new.txt",userdata.username,(error)=>{
 if(error){
     throw error;
     console.log(error);
 }
});