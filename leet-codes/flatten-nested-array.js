
/* 
Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.
*/
// Input
const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

function flattenArray(arr, n, depth = 0) {
    const flattend = [];
    
    for (const item of arr) {
        if (Array.isArray(item) && depth < n) {
            flattend.push(...flattenArray(item, n, depth +1));
        } else {
            flattend.push(item);
        }
    }

    return flattend;
}

// test for n = 0
// test for n = 1
// test for n = 2

console.log(flattenArray(arr, 5));
console.log(flattenArray(arr, 2));