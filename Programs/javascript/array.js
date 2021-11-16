const { map } = require("jquery");

let daily_act=['eat','sleep'];

daily_act.push('exerceise');

console.log(daily_act);

daily_act.push('dinner');

console.log(daily_act);

//spread operator

let arr1=[1,2,3,4];
let arr2=[5,6,7,8];

let arr3=[...arr1,...arr2]
console.log(arr3);



function multiple(a,b=1){
    return a*b;
}

//default value

function say(message='hi'){
    console.log(message);
}

say();
say('Hello');

 //map and classes get,delete,keys,values,set,has

 //var map=mew Map();


 class Person{
     constructor(name){
         this.name=name;
     }

     greet(){
         console.log('Hello '+this.name);

     }
 }

 const person1=new Person('John');
 const person2=new Person('vaishnavi');

 console.log(person1.greet());

 class animal{
    constructor(legs){
        this.legs=legs;
    }

    walk(){
        console.log('walking on' +this.legs +'legs' );
        }

        static helloworld(){ //static method
            console.log("Hello wold");
        }
 }

 class Bird extends animal{
     constructor(legs){
         super(legs);
     }
     fly(){
         console.log('flying');

     }
 }
 let bird = new Bird(2);

 bird.walk();
 bird.fly();

 Bird.helloworld();

 //Prototype =object can access the data by binding

 //preson.prototype.ag1=45;

 