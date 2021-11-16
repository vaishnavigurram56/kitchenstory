const { threadId } = require("worker_threads");

//--You can use a return value of a function as a default value for a parameter//
let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}

let fullPrice = getPrice(100);
console.log(fullPrice);

let tax_rate = () => 0.2;

let get_price=function(price,tax=price*tax_rate()){
    return price+tax;
}

let full=get_price(100);
console.log(full);


class Queue extends Array{
    enqueue (e){
        super.push(e)

    }
    dequeue(){
        return super.shift();
    }
    peek(){
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}

var customers=new Queue();
customers.enqueue('a');
customers.enqueue('b');
customers.enqueue('c');
customers.dequeue('d');
console.log(customers);

while (!customers.empty()) {
    console.log(customers.dequeue());
}



/*

class Queue extends Array {
    enqueue(e) {
        super.push(e);
    }
    dequeue() {
        return super.shift();
    }
    peek() {
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}

var customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');

while (!customers.empty()) {
    console.log(customers.dequeue());
}
*/
