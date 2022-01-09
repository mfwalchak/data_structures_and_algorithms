const LinkedList = require("./linkedLists");

const myLinkedList = new LinkedList(); //create a new list

myLinkedList.insertAtHead("A")
myLinkedList.insertAtHead("B")
myLinkedList.insertAtHead("C")
myLinkedList.insertAtHead("D")

//pass the callback function into the find parameter this becomes isMatch;
//callbacks are just functions that are passed as parameters

console.log(myLinkedList.find((node)=>node.value === "B"));

// console.log(myLinkedList.insert("coding", (node, index) => node.value  === "B"));
// console.log(myLinkedList.head.next);