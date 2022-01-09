//building block of a linked list  is the node
//node contains a VALUE[any primitive] and a POINTER to the next node

class Node {
    constructor(value, next = null){ //defaults to null so every new node is the last in the list if not otherwise spec'd
     this.value = value; //stores our data
     this.next = next;   //pointer to the next node
    }
}

class LinkedList { //created a class for the linked list
    constructor(){
        this.head = null; //references first node when a new list is instantiated    
    }
    //lets add a function that only allows a node to be inserted at the beginning of the list
    insertAtHead(value){
        this.head = new Node(value, this.head); //using this.head as the pointer changes "this" to the previous value
        //changing the pointer of a new node to the previous node's value essentially inserts the new node BEFORE the
        //the other node
        return this //return the current state of the list
    }   
    //lets add the ability to calculate the length of our linked list, like we can in an array
    get length(){ //by adding GET in front of the function we can call it like a property use dot notation
        let count = 0;
        let node = this.head; //this initiates length node to be the first node in the list
        //create a while loop to increment through the list;
        while(node){
            count++;
            node = node.next; //
        }
        //or use a for loop
        // for (let i = 0; node[i].next !== null; i++){ //how can we get this to work?
        //     count++;
        // }
        return count; //where count is the number of successful .next operations
    }
    //create an insert function
    insert(value, isMatch = (node, index) => index === this.length -1){ //default to last node if no callback is provided
        if (this.head) {//if there is a head that means there is a value(s) in the list
            //determine where to insert
            //find the node to insert AFTER
            const previousNode = this.find(isMatch);
            //handle if previousNode is null:
            if (!previousNode) {
                throw new Error("No Match")
            }
            //create new node with the pointer 
            const newNode = new Node(value, previousNode.next); //this new node points to the next that the node we are
            //replacing pointed to previously
            previousNode.next = newNode; //points previous node to the newly created node so we are in between the existing nodes

        } else {
            this.insertAtHead(value); //if there is no node in the list insert at the head
        }
        return this;
    }
    //create a find() function using a search algorithm
    find(isMatch) {
        let index = 0; //set iterator to 0
        let node = this.head; //first node in the list
        while(node){ //this will check if the current node isMatch to the find
            if (isMatch(node, index)){
                return node;
            }
            index++;
            node = node.next; //we didn't find isMatch yet, check next node
        }
        return null;//if looped through entire list without isMatch return null
    }
}
module.exports = LinkedList;