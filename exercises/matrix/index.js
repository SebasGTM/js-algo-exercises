// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    const matrix = new Array(n).fill().map((x) => new Array(n).fill(null));
    
    let rowStart = colStart=0;
    let rowEnd = colEnd=n-1;
    let counter = 1;
    
    while(rowStart <= rowEnd && colStart <= colEnd) {

        for(let i=colStart; i<=colEnd; i++) {
            matrix[rowStart][i] = counter++;
        }
        rowStart++;

        for(let i=rowStart; i<=rowEnd; i++) {
            matrix[i][colEnd] = counter++;
        }
        colEnd--;

        for(let i=colEnd; i>=colStart; i--) {
            matrix[rowEnd][i] = counter++;
        }
        rowEnd--;

        for(let i=rowEnd; i>=rowStart; i--) {
            matrix[i][colStart] = counter++;
        }
        colStart++;
    }

    return matrix;
}

const m = matrix(3);

module.exports = matrix;
