// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function funcCache(func) {

    const cache = {};

    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = func(...args);
        cache[args] = result;

        return result;
    }
}


function fib(n) {
    if (n < 2)
        return n;

    console.log("fib-args", n);
    return fib(n-1) + fib(n-2);
}

fib = funcCache(fib);

fib(5);

// function fib(n) {
//     if (n == 0)
//         return 0;
//     else if (n == 1)
//         return 1;

//     return fibRec(n-2, 0, 1);
// }

// function fibRec(n, prevNum, num) {
//     if (n == 0) {
//         return prevNum + num;
//     } else {
//         return fibRec(--n, num, prevNum + num);
//     }
// }

// function fib(n) {

//     let prevNum = 0;
//     let num = 1;
//     for(let i=0; i<n-1; i++) {
//         let tmp = num;
//         num = prevNum + num;
//         prevNum = tmp;
//     }

//     return num;
// }
fib(2);

module.exports = fib;
