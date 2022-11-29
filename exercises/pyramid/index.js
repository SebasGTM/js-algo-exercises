// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// row = n 

function pyramid(n) {
    let col = n + (n-1);

    for(let i=1; i<=n; i++) {
        rCount = i + (i -1);
        let rowStr = "";
        let rStart = (col - rCount) / 2;
        let rEnd = rStart + rCount;

        for (let j=0; j<col; j++) {
            if (j >= rStart && j < rEnd) {
                rowStr += "#";
            } else {
                rowStr += " ";
            }
        }

        console.log(rowStr);
    }
}


module.exports = pyramid;
