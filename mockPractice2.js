let words  = "They were led into a small room on the second floor of the nondescript two-story building that housed Gottman's operations, and they sat down about five feet apart on two office chairs mounted on raised platforms. They both had electrodes and sensors clipped to their fingers and ears, which measured things like their heart rate, how much they were sweating, and the temperature of their skin. Under their chairs, a 'jiggle-o-meter' on the platform measured how much each of them moved around. Two video cameras, one aimed at each person, recorded everything they said and did. For fifteen minutes, they were left alone with the cameras rolling, with instructions to discuss any topic from their marriage that had become a point of contention. For Bill and Sue it was their dog. They lived in a small apartment and had just gotten a very large puppy. Bill didn't like the dog; Sue did. For fifteen minutes, they discussed what they ought to do about it."


const map = {};

let newWords = Array.from(words.replace(/[,'."!?\-\*;]/g, "").split(" "));

//let newWords = Array.from(words.split("."));

newWords.forEach((line, index) => {
    line = line.toLowerCase();

    map[line] ? map[line]++ : map[line] = 1;

})
console.log(newWords);
console.log(map);
//console.log(newWords);