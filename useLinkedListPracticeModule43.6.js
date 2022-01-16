const LinkedList = require("./linkedListPracticeModule43.6");

const linkedList = new LinkedList();

linkedList.insert("One");
linkedList.insert(2);


console.log(linkedList);

console.log(linkedList.find((node) => node.value === "One").value = 1);

console.log(linkedList);