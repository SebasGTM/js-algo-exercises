// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    stepRecur(n, 1);
}

function stepRecur(n, curr) {

    let rowStr = "";
    for (let i=0; i<n; i++) {
        if (i < curr) {
            rowStr += ("#");
        } else {
            rowStr += (" ");
        }
    }
    console.log(rowStr);
    
    if (curr === n)
        return;

    stepRecur(n, ++curr);
}

steps(2);

// FIRST SOLUTION repat

// function steps(n) {
//     for (i=1; i<=n; i++) {
//         console.log("#".repeat(i) + " ".repeat(n-i));
//     }
// }

module.exports = steps;
