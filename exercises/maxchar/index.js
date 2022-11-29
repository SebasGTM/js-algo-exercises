// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let charMap = {}
    let maxChar = "";
    let maxVal = 0;
    for(char of str) {
        charMap[char] = charMap[char] +1 || 1;
        if (charMap[char] > maxVal) {
            maxChar = char;
            maxVal = charMap[char];
        }
    }

    return maxChar;
}

module.exports = maxChar;
