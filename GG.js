
const randomNumber=Math.floor(Math.random()*99+1)
console.log(randomNumber);
game(4);


function game(num){
   let result;
    switch(num)
    {
        case (randomNumber===num):
        result=console.log("YOU WON!");
        break;
        case (randomNumber>num):
            result=console.log("YOU TOO LOW");
        break;
        case (randomNumber<num):
            result=console.log("YOU TOO HIGH");
        break;
    }
    return result;
    }
 
    game(6);


// const readline=require('readline');

// const r1=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// r1.question("Enter the Number:",function(num){
//     const k=parseInt(num);
//     switch(num){
//         case (randomNumber===k) :
//         console.log("YOU WON!");
//         break;
//         case (randomNumber>k):
//         console.log("YOU TOO LOW");
//         break;
//         case (randomNumber<k):
//         console.log("YOU TOO HIGH");
//         break;
//     }
//     r1.close();
// })


// r1.on("close",function(){
// process.exit();
// })

