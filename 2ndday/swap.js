// to swap using third variable--------------------- 
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXX
a = b //6
b = a //6 
XXXXXXXXXXXXXXXXXXX*/
 
    var v1=20;
    var v2=30;
    console.log(v1,v2);
    var v3=v1;
    v1=v2;
    v2=v3;
    console.log(v1,v2);

    
    // getting value from user at HTML alert box:
 /*const a=parseInt(prompt("Enter A value:"));
 const b= parseInt(prompt("Enter B value:"));

        c=a;
        a=b;
        b=c;*/

//swap using array:destructuring:

swap1=11;
swap2=5;
console.log(swap1,swap2);
var i=[swap1,swap2]=[swap2,swap1];
console.log(i);
console.log(swap1,swap2);


//swap method 3:
s=5;
n=11;
s=s+n;
n=s-n;
s=s-n;
console.log(`S=${s},N=${n}`);
