// Problem: Sort a stack containing a series of numbers. The only additional
// storage you can use is a second stack.
// a problem like this might be given so you can show your knowledge about certain constraints
// do you know what a stack is? Do you know what your limitations are?

class Stack {
    constructor(arr = []) {
      this.arr = arr;
    }
  
    isEmpty() {
      return this.arr.length === 0;
    }
  
    push(value) {
      this.arr.push(value);
    }
  
    pop() {
      return this.arr.pop();
    }
  
    peek() {
      return this.arr[this.arr.length - 1];
    }
  }
  
  
//   function sortStack(stackA) {
//     const temp = new Stack();

//     let inputStackPop = stackA.pop();

//     //while temp stack is not empty and top of stackA is greater than variable temp
//     while (!temp.isEmpty() && stackA.peek() < inputStackPop){
//         temp.push(stackA.peek());
//     }
//     //pop from temp stack
//     //push to input stack (stackA);

//     return temp;
//   }

function sortStack(stackA){
    const stackB = new Stack();

    while (!stackA.isEmpty()){ //if stackA is empty the sort is done
        const temp = stackA.pop(); //temporary variable for top value of stackA
         while (stackB.peek() > temp){
            //push top of stackB back to stackA
            stackA.push(stackB.pop())
        }
        stackB.push(temp);
    }
    return stackB;
}

//now solve this recursively!
function sortStackRecursive(stackA, holding = null){
    const stackB = new Stack();
    if (!stackA.isEmpty()){
        return stackB;
    }
    holding = stackA.pop();
    if (holding > stackB){
        stackB.push(stackA.pop)
    }
    return sortStackRecursive(stackA, holding);
}

  
  const stackA = new Stack([4, 2, 3, 7, 9])
  
  console.log(sortStackRecursive(stackA)); // 2 3 4 7 9
  