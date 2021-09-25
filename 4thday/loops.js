//LOOPS
/*1.FOR LOOP
2.WHILE LOOP
3.DO WHILE LOOP*/

// FOR LOOP
let i;
for(i=0;i<=10;i=i+4){
    console.log(i);
}

//WHILE LOOP
let s=1;
while(s<=5){
    console.log(s);
    s=s+2;
}

//DO WHILE
j=2;
do{
    console.log(j);
    j=j+2;
}while(j<10)
    
//SWITCH CASE


// function fav(num){
    
// switch(num){
//     case 1:
//         console.log("GREEN");
//         break;
//         case 2:
//             console.log("BLUE");
//             break;
//         case 3:
//             console.log("RED");
//             break;
// }
// }
// fav(1);
// fav(2);
// fav(1);



const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Enter x:", function (num) {
    const a=num;
    switch(a){
        case "1":
            console.log("GREEN");
            break;
            case "2":
                console.log("BLUE");
                break;
            case "3":
                console.log("RED");
                break;
    }
    
    rl.close()
})


    

rl.on("close", function() {
    process.exit()
})

