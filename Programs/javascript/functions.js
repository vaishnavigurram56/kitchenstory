var age=30;
var b=20;

var c = age + b ;

console.log('the added value' + c);

let r =78;
{
    let r=56;
    var b=67;
    console.log('the removed value'+r);
    console.log('the var value'+b);

}

console.log('the outside value of let'+r);
console.log('the outside var value:'+b);

var fruit='apple';
console.log(fruit);

//block 
function getFruit(){
    console.log(fruit);


}
getFruit();

function display(){
    if (true)
{
    var item1='apple';
    const item='ball';
    let item3='cloud';

}
console.log(item1);
console.log(item);

}

let name1="your name is cool";
console.log("char at (7):"+ name1.charAt(7));
console.log("char at (7):"+ name1.toUpperCase(7));

let numbers=[2,3,5,7,11,13,17];
let newArray = numbers.slice(3,6);
console.log(newArray);
console.log(newArray.length);

let sentence="Java is language";

let check=sentence.includes("java");

console.log(check)

let output=function(){
    var a=90;
    var b=80;

    return a+b;
}
console.log(output());

function person(){
    this.name='john';
    this.age=23;

    this.greet =function(){ //function expression

    console.log('hello');
    }
}

person.prototype.dept='It stream';  // to add the new feature in class
//create objects 
const person1=new person();
const person2=new person();

console.log(person1.name);
console.log(person2.name);

person1.greet();

console.log(person1.dept)

console.log(person1._proto_);


person.prototype={dept:'CSE'};

const person3 = new person();

console.log(person3.dept); //after changing prototype decklare new obje that will give new value
console.log(person1.dept); //old value are binded to old obj 
console.log(person2.dept); //old value are binded to old obj

person.prototype.age1=45;

console.log(person3.age1); //after changing prototype decklare new obje that will give new value
console.log(person1.age1);

//closure function
function add(){
    let sum=0;
    for (let i=0;i<arguments.length;i++){
        
    }
}