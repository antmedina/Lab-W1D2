var friends = ["Rick","Kenneth","Sebastian","Razvan","Matt"]
var len = friends.length;

var a=99
var b=(a-1)

for (var i=0; i<len;i++ ) {
while(a>=3){  
     console.log(a+" lines of code in the file, "+a+" lines of code; "+friends[i]+ " strikes one out, clears it all out, "+b+" lines of code in the file!");
    a--;
    b--;
}

do{
console.log(a+ " lines of code in the file, "+a+ " lines of code; "+friends[i]+" strikes one out, clears it all out, " +b+" line of code in the file!");
a--;
b--;
}while(a===2);
do{
   console.log (a+ " line of code in the file, "+a+ " line of code; "+friends[i]+" strikes one out, clears it all out, no more lines of code in the file!");
a--;    
}
    while(a===1);
    console.log("");   
    a=99;
    b=a-1;
}
