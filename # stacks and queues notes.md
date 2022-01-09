# Stacks and Queues

Stacks are a LIFO (Last In First Out) data structure - 
    The last operation to be called is the first one to complete.
    Recursion is an example of a stack
    These can be implemented with:
        -- Linked Lists with Tail Pointers
        -- Array

    In most programming languages it's typical that:
    Variables you create are stored in the stacks
    Variables out of scope are popped from the stack

Stack Operations: both O(1) operations;
    1- Pop
    1- Push
To create a stack:

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
        this.top = newNode(value, this.top);
        return this;
    }

    pop(value){
        //reference the current top node
        const popped = this.top;

        //reassign the top to the next node underneath
        this.top = popped.next 

        //return the value of what was popped
        return popped.value; 
    }
    }

Remember that .next in a stack moves DOWN through the stack; every "this.top" reference is the current top in the stack.

# QUEUES
FIFO Operations (First In First Out)
    - Operations are done at BOTH ends of the queue
    - Join at the back, stuff happens at the front
    Implement with:
    - Linked list with Head and tail pointer

Only 2 methods: enqueue (add to the end of the queue) and dequeue(remove item fro the start)
Both are O(1) operations because we keep track of the FIRST and LAST items

        class Node {
            constructor(value, next = null) {
                this.value = value;
                this.next = next;
            }
        }

        class Queue {
            constructor(){
                this.head = null;
                this.tail = null;
            }

            enqueue(value){
                const newNode = new Node(value);
                this.tail = newNode;
                
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
                }
            }
        }
