const concordance = require("./mockPractice2")

let words  = "They were led into a small room on the second floor of the nondescript two-story building that housed Gottman's operations, and they sat down about five feet apart on two office chairs mounted on raised platforms. They both had electrodes and sensors clipped to their fingers and ears, which measured things like their heart rate, how much they were sweating, and the temperature of their skin. Under their chairs, a 'jiggle-o-meter' on the platform measured how much each of them moved around. Two video cameras, one aimed at each person, recorded everything they said and did. For fifteen minutes, they were left alone with the cameras rolling, with instructions to discuss any topic from their marriage that had become a point of contention. For Bill and Sue it was their dog. They lived in a small apartment and had just gotten a very large puppy. Bill didn't like the dog; Sue did. For fifteen minutes, they discussed what they ought to do about it."


//2nd problem searchLines
//take a linked list of sentences, and look inside to find any sentences that have the given word
//convert the linked list into an array
//returnt the line (index location) that word appears in

const LinkedList = require("./starter-solving-problems-with-linked-lists/src/lib/linkedList");

// where: words is the linked list
// concordance is the return of step 1's function
// data is the list of strings

function searchLines(words, concordance, data){
    let llArray = words.asArray();
    let inConcordance = Object.keys(concordance).some(word=> llArray.includes(word));

    if (!inConcordance || !llArray.length){
        return [];
    }
    let shortConcordance = [];

    llArray.forEach(word => shortConcordance.push(...concordance[word])); //take in words to match

    return [...new Set(shortConcordance).map(index=>{ return data[index] })] //create an array from Set and map to return index of the word

}

console.log(searchLines(words, concordance))