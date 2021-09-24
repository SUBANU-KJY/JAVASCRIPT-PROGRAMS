//NORMAL FUNCTION
addition();
addition(6,1);

summation();
summation(100,100);
var a=4;
var b=4;
function addition(a=5,b=1){
    sum=a+b;
    console.log(sum);
}

//ARROW FUNCTION
const summation=(a,b)=>{
    sum=a+b;
    console.log(sum); 
}
summation();
summation(100,100);
