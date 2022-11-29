// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    return str.match(/[aeuoi]/gi)?.length || 0;
}

// SOLUTION 1

// function vowels(str) {

//     let count = 0;
//     let vowels = ["a", "e", "i", "u", "o"];
//     for (char of str.toLowerCase()) {
//         if (vowels.includes(char))
//             count++;
//     }

//     return count;
// }

module.exports = vowels;
