//to get sqrt of a number: Math.sqrt();

var a=169;
const squareroot = Math.sqrt(a);
console.log(squareroot);


//getting num from user at html Alert box
// prompt();
/*var b;
b=parseInt(prompt("ENTER A NUMBER:"));
const sqrtvalue=Math.sqrt(b);
console.log(`The SquareRoot of ${b}  is ${sqrtvalue}`);
alert(`The SquareRoot of ${b}  is ${sqrtvalue}`);
*/
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter x:", function(x) {
    const sroot = Math.sqrt(x);
console.log(sroot);

        rl.close()
    })

rl.on("close", function() {
    process.exit()
})




