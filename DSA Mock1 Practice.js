//PART 1 - creating a concordance. We are trying to find what index a word appears in.
let words  = "They were led into a small room on the second floor of the nondescript two-story building that housed Gottman's operations, and they sat down about five feet apart on two office chairs mounted on raised platforms. They both had electrodes and sensors clipped to their fingers and ears, which measured things like their heart rate, how much they were sweating, and the temperature of their skin. Under their chairs, a 'jiggle-o-meter' on the platform measured how much each of them moved around. Two video cameras, one aimed at each person, recorded everything they said and did. For fifteen minutes, they were left alone with the cameras rolling, with instructions to discuss any topic from their marriage that had become a point of contention. For Bill and Sue it was their dog. They lived in a small apartment and had just gotten a very large puppy. Bill didn't like the dog; Sue did. For fifteen minutes, they discussed what they ought to do about it."
const map = new Map(); //or const map = {}
//turn your linked list into an array
let newWords = Array.from(words.replace(/[,'."!?\-\*;]/g, "").split(" "));
//let newWords = Array.from(words.split("."));
newWords.forEach((line, index) => {
    line = line.toLowerCase();
    concordance[line] ? concordance[line]++ : concordance[line] = 1; //same logic as below just as ternary
    //this is where we will see the "occurrence" pattern
    // if(concordance[line]){  //whatever number we come across that is in the map Concordance object, do something
    //     concordance[line]++ //increment the value of the map Concordance key VALUE
    // } else {
    //     concordance[line] = 1; //if nothing has been placed in the map Concordance yet, the map number will be 1
    // }
})
//PART 2 - using the concordance. 
function searchLines(words, concordance, data){
    //this is turning the words into an array using the lib built in asArray method for linked list
    let wordsArr = words.asArray();
    let found = Object.keys(concordance).some(word=> wordsArr.includes(word));
    if (!found || !wordsArr.length){
        return [];
    }
    let matchedWords = [];
    wordsArr.forEach(word => matchedWords.push(...concordance[word])); //take in words to match
    return [...new Set(matchedWords).map(index=>{ return data[index] })] //create an array from Set and map to return index of the word

}