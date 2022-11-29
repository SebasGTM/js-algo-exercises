// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let retStr = "";
    for (let char of str)
        retStr = char + retStr;

    return retStr;
}
reverse('hello');
module.exports = reverse;
