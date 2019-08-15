module.exports.add= (a,b)=>{
    var c=a+b;
    return c;
}


module.exports.sub= (a,b)=>{
    var c1=a-b;
    return c1;
}


module.exports.mul= (a,b)=>{
    var c2=a*b;
    return c2;
}

module.exports.revr= (a,b)=>{
     var a = b % 10;
     rev = rev * 10 + a ;
     b = Math.floor(b/10);
}

module.exports.primecheck = (x) => {
    var k = 0;
    for(var i=1;i<=x;i++){
        if(x% i == 0){
            k++;
        }
    }
    if(k==2){
        console.log(x + " is a prime number");
    }
    else{
        console.log(x + " is not a prime number");
    }
  };