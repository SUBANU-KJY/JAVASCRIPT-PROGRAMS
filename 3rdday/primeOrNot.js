const readline =require('readline');
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("Enter a Number:",function(PN){
   var i=2;
   if(i<=PN/2){
       if(PN%i==0){
           console.log(`${PN} is not a prime number`)
       }
       else{
           console.log(`${PN} is a prime number`)
       }
   }
    r1.close();
})
r1.on("close",function(){
    process.exit();
})
