//basic operations/functions done by Javascript:
console.log("5" == 5) //true
console.log("5" === 5) //false

console.log("a" == "a") //true
console.log("a" === "a") //true
console.log("a" == "A") //false

console.log(1 + 1) //2
console.log(1 - 1) //0
console.log(1 + "1") //11
console.log(1 - "1") //0
console.log("1" + "1") //11
console.log("1" - "1") //0

console.log("2"+true-false) //true = 1; false = 0; null = 0;
console.log(4-false-true)


// to ADD :

var a=5;
var b=11;
c=a+b;
sub=a-b;
console.log(`Addition = ${c}`);
console.log(`subtraction=${sub}`);

//  value getting From user at HTML Alert box:

/*(var c=parseInt(prompt("Enter a value 1:"));
 var d=parseInt(prompt("Enter a value 2:"));
 sum=c+d;
 alert(`Addition of ${c} and ${d} is ${sum}`);*/



//Getting value from the user in the terminal:
const readline = require('readline')

const r1=readline.createInterface({
  input:process.stdin,
  output:process.stdout  
})
r1.question("Enter the value of N:",function(value){
   const N=value;
console.log(N);
})
