// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    if (stringA.length !== stringB.length)
        return false;

    const charMapA = createCharMap(stringA);
    const charMapB = createCharMap(stringB);

    for(csum in charMapA) {
        if (charMapA[csum] !== charMapB[csum])
            return false;
    }

    return true;
}

function createCharMap(str) {
    str = str.toLowerCase().replace(/[^\w]/g, "");
    charMap = {}
    for(char of str) {
        charMap[char] = charMap[char] +1 || 1;
    }
    return charMap;
} 

anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')

module.exports = anagrams;
