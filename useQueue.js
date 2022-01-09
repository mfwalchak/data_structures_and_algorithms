class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor(){
        this.first = null; //head
        this.last = null; //tail
    }

    enqueue(value){
        const newNode = new Node(value);
        this.last = newNode;
        
        if (!this.first) {
            this.first = newNode;
        } else {
            this.last.next = newNode;
        }
        this.last = newNode;
    }
    dequeue(){
        //check that queue is not empty
        if (this.first){
            const dequeued = this.first; //reference first node

            this.first = dequeued.next; // update "first" pointer to the next node

            if (dequeued === this.last){ //if removed the last node we also set last to null;
                this.last = null;
            }
            return dequeued.value;
        }
    }
}

const myQueue = new Queue();

myQueue.enqueue(["hot roast beef", "coke", "fries"]);
myQueue.enqueue(["half chicken"]);
myQueue.enqueue(["pot au pain"]);
myQueue.enqueue(["coney dog", "ice tea"]);

console.log(myQueue);

console.log("first", myQueue.first);
console.log("dq", myQueue.dequeue());
