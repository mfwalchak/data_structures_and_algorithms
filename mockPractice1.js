let numbers = "72156151656165154217878976512124500000642121215648765121123465435147867456313222357486765465416"

let words  = "They were led into a small room on the second floor of the nondescript two-story building that housed Gottman's operations, and they sat down about five feet apart on two office chairs mounted on raised platforms. They both had electrodes and sensors clipped to their fingers and ears, which measured things like their heart rate, how much they were sweating, and the temperature of their skin. Under their chairs, a 'jiggle-o-meter' on the platform measured how much each of them moved around. Two video cameras, one aimed at each person, recorded everything they said and did. For fifteen minutes, they were left alone with the cameras rolling, with instructions to discuss any topic from their marriage that had become a point of contention. For Bill and Sue it was their dog. They lived in a small apartment and had just gotten a very large puppy. Bill didn't like the dog; Sue did. For fifteen minutes, they discussed what they ought to do about it."

//Occurrence pattern

const map = {}; //use an object to hold onto key values that can't be duplicated

words = words.toLowerCase().replace(/[.,;\-!?:']/g, "").split(" ");
//console.log("words", words);

//numbers = numbers.split("");

words.forEach((word)=>{
    //this is where we will see the "occurrence" pattern
    // if(map[word]){  //whatever number we come across that is in the map object, do something
    //     map[word]++ //increment the value of the map number VALUE
    // } else {
    //     map[word] = 1; //if nothing has been placed in the map yet, the map number will be 1
    // }
    map[word] ? map[word]++ : map[word]=1;
});


//the pattern is checking if something exists in the map object and then running an if/else where ELSE is the initialization of the map

console.log(map); //this logs the number of occurences of each number in the pattern;