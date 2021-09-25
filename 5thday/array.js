//ARRAY:----------------->[]
let array=[];//empty array
console.log(array);
let A=["SUBANU",5,"white",1,2]


console.log(A);
// to print array elements in the array without [] using FOR LOOP
for(i=0;i<=4;i=i+2){
    console.log(A[i]);
}
console.log(A.indexOf("SUBANU"));// print index of SUBANU in  the array "A"
console.log(A[0]);// print the value which is in the position of "0" in array "A"
console.log(A.length);

//to add=push(),remove=pop() the LAST element in array:
console.log(` popped element=${A.pop()}`);
console.log(A);
console.log(` pushed element=${A.push("NANDHINI","SUBANU","KEERTHI","KAUSHI")}`);
for(j=0;j<=8;j++){
console.log(A[j]);
}

//to add=unshift,remove=shift the FIRST element in array:
console.log(A.shift());
console.log(A);
console.log(A.unshift("RAKCHA","LAKSHANA"));
console.log(A);

// to add anywhere in the array splice("starting Index", "number of elements will be removed", "element which will be add");
console.log(A.splice(2,2,"HAR","SUB"));
console.log(A);
Arr=[...A,["sakthi", "siva", "subramani"]];
console.log(Arr);
console.log(Arr[9][0]);
Arr.splice(1,1,{name:"harini",age:18,gender:'f'})
console.log(Arr)
console.log(Arr[1].name);


//easy FOR LOOP to print:
for(let s of Arr){
    console.log(s);//--------------------->Elements
}

for(let h in Arr){
    console.log(h);//---------------------->index....0,1,2...
}


