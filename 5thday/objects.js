//ARRAY------->[]
//OBJECTS--------->{key:value}
const obj={
    name:"SUBANU",
    age:18,
    gender:'f',
    friend_name:"HARINI",
    Name:{
        N:"SS",
        age:18,
        gender:'f',
    },
    result:function(){
        console.log(`${this.name} and ${this.Name.N} are friends`);
        
    }
}

obj.result();
console.log(obj.name);
console.log(obj.Name.N);
console.log(typeof(obj));

// EASY FORLOOP
for(s in obj){
    console.log(s);//---------------> print KEYS in object
}
console.log(Object.keys(obj));//---------->[key1,key2,.....]
console.log(Object.values(obj));//-------------->[value1,value2,....]
console.log(Object.entries(obj));//--------------->[
                                                // [key1,value1],
                                                // [key2,value2],
                                                //   .......      //-------->[[]]
                                                // [keyn.valuen]
                                                //  ]    
                                                
                                                
//CONSTRUCTORS


name="ANU";
colour="black";
sub="maths";
function Subanu(name="SUBANU",colour="BLACK",sub="MATHS"){
    this.name=name,
    this.favColor=colour;
    this.favSub=sub;
}
const S=new Subanu("SS","white","maths");
console.log(S);
const S1=new Subanu();
console.log(S1);
console.log(S.favColor);
console.log(S1.favColor);


//???????
//Subanu.prototype.profession = "student";


