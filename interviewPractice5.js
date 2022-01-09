// Problem: Given an linked list containing sorted numbers, insert a new
// number in the correct position

const Node = require("./starter-solving-problems-with-linked-lists/src/lib/node");

class Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor(items) {
      this.head = null;
  
      items.forEach((item) => this.push(item));
    }
  
    push(item) {
      if (this.head === null) {
        this.head = new Node(item, null);
        return;
      }
  
      let node = this.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(item, null);
    }
  
    show() {
      let node = this.head;
      while (node !== null) {
        process.stdout.write(`${node.value}, `);
        node = node.next;
      }
      process.stdout.write("\n");
    }
  //-----------CREATE AN INSERTION FUNCTION TO INSERT A VALUE INTO THE SORTED LIST AT THE CORRECT POINT----//
    //walk it through line by line
    insertSorted(value){ //takes in a vlue to put into the ll
        //declare a new node with value passed in
        const newNode = new Node(value);

        if (this.head === null){
            //it's empty so set the new node to become the head
            this.head = newNode;
            newNode.next = null
            return this;
        }
        //if value passed in is smaller than the ll value
        if (value < this.head.value){
            newNode.next = this.head; //updates the next pointer to be the head node.
            this.head = newNode; //reassign the "head" prop to the new node
            return this;
        }
        //if it's not smaller it's got to be in between right?
        let node = this.head
        //loop until we find the node before the insertion point
        while (node.next && node.next.value < value){ //checking next node value to find the last value smaller than current
            node = node.next; //this iterator really just means node.next.next.next.next.next.next...
        }
        //once node is found the loop breaks and we update the pointers
        newNode.next = node.next; //new node's next point is the previous node's next
        node.next = newNode; //previous node's next pointer is the new node

        return this;
    }
  }
  
  let l = new LinkedList([1, 3, 5, 6, 7, 9]);
  l.insertSorted(8);
  l.show(); // 1, 3, 5, 6, 7, 8, 9
  