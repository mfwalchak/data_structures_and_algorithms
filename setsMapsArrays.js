When working with arrays we can allocate space/length to the whole array using a constructor method:

const myArr = Array(10);
//or
function buildArray(input){
    return Array.from(input);
}

Performing array methods increase or decrease the length of an array but space remains allocated until being overwritten:

myArr.pop() //decreases the length of the array by removing the last item but memory is still allocated
myArr.push()//increases the length of the array and reassigns the memory to the new value
myArr.splice(1,0,32)//choose an index, choose how far the splice will overwrite into the array, choose value
myArr.splice(1,1)//not adding a value to the end removes values from the index points and shifts the values over 1 (copy all values back 1 point)

Splice is a O(n) operation, inserting an item requires the entire array to be read and shifted over.
As opposed to simply overwriting the index myArr[1]=5 which would be a O(1) constant operation since you are only ever accessing a single IDBCursorWithValue


SETS are a special kind of array that ONLY UNIQUE ITEMS can be stored in

const setArray = ["Alice", "Carol"]//if we declare an array

const mySet = new Set(setArr)//we can create a new set from the array

or declare empty const emptySet = new Set();
emptySet.add("Alice");
emptySet.add("Carol");

You can't use .length method to find the size because it isn't an array, but you can use 
emptySet.size() and it will returnt the number of items stored in the Set.