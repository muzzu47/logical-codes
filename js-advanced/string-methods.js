const text = "hi planet earth";

function findDuplicateChars(inputString) {
    let arrString = inputString.split("");
    let uniqueArr = [];
    let duplicateArr = [];
    arrString.forEach((x) => {
        if (uniqueArr.includes(x)) {
            duplicateArr.push(x);
        }
        else {
            uniqueArr.push(x);
        }
    })
    return {
        dulicateChars : duplicateArr,
        uniqueChars : uniqueArr,
    }
}

function splitInput(inputString) {
    let result = inputString.split("");
    return result;
}

// console.log(findDuplicateChars(text));
// console.log("Split string is :", splitInput(text));

console.log("Testing local commits", splitInput(text));
console.log("Testing local", splitInput(text));