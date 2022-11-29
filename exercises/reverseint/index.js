// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    revInt = 0;

    let isNeg = n < 0;
    n = Math.abs(n);
    while (n > 10) {
        let rest = n % 10;
        n = Math.floor(n/10);

        revInt += rest;
        revInt *= 10;
    }
    if (n > 0) {
        revInt += n;
    }

    if (isNeg)
        revInt *= -1;

    return revInt;
}

module.exports = reverseInt;
