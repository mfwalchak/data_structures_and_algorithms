// const numbers = new Set();
// numbers.add(3);
// numbers.add(7);
// numbers.add(4);
// numbers.add(3);

// numbers.delete(4);

// let sum = 0;
// numbers.forEach((e)=> (sum += e))

// console.log(sum);

const studentGrades = ["B", "F", "A", "A", "D", "B", "A", "F"];
const uniqueGrades = new Set(studentGrades); // Duplicates will be removed

for (let grade of uniqueGrades.values()) {
  console.log(grade); // 'B', 'F', 'A', 'D'
}

const distinctGrades = [...uniqueGrades];
console.log(distinctGrades);
console.log(uniqueGrades.has("C"));