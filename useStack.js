class Node {
    constructor( value, next = null ) {
        this.value = value;
        this.next = next;
    }
}
class Stack {
    constructor(){
        this.top = null; 
    }

push(value){
    const newNode = new Node(value);
    this.top = new Node(value, this.top);
    return this;
}

pop(){
    //reference the current top node
    const popped = this.top;

    //reassign the top to the next node underneath
    this.top = popped.next 

    //return the value of what was popped
    return popped.value; 
}
}

const myStack = new Stack();

myStack.push(4);
myStack.push(5);
myStack.push(10);
myStack.push(2);

console.log(myStack.pop()); //2
console.log(myStack.pop()); //10
console.log(myStack); //Stack top: 4, next: 5
console.log(myStack.top) //5 node

