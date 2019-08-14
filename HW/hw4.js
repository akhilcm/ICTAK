const my=require('./operation');
var num;
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  console.log("enter a number :");


  