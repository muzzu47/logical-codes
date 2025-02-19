const testArr = [1, 2, [3, 4, [5, 6, [7, 8]]]];

const flattenedArr = testArr.flat(Infinity); // Infinity flattens recursively

console.log(flattenedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]