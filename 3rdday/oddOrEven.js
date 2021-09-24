const readline =require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("Enter a Number:",function(P){
    if(P%2==0){
    console.log(`${P} is EVEN`)
    }
    else{
        console.log(`${P} is odd`)
    }
    r1.close();
})
r1.on("close",function(){
    process.exit();
})
