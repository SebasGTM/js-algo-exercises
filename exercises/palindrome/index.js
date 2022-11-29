// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split("").every((char, i) => {
        return char === str[str.length - i -1]
    })
}


// INDEX SOLUTION

// function palindrome(str) {
//     return palComp(str, 0, str.length-1);

// }

// function palComp(str, start, end) {
//     if (start === end) {
//         return true;
//     } else if (str[start] === str[end]) {
//         if (start+1 === end)
//             return true;
//         else
//             return palComp(str, start+1, end-1);
//     } else {
//         return false;
//     }
// }

module.exports = palindrome;
