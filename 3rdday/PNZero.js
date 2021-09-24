const readline =require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("Enter a Number:",function(number){
    if(number==0){
        console.log(`${number} is ZERO`);
    }
    else if(number>0){
        console.log(`${number} is POSITIVE`);
    }
    else{
        console.log(`${number} is NEGATIVE`)
    }
    r1.close();
})
r1.on("close",function(){
    process.exit();
})
