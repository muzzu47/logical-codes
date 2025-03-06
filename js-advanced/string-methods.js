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

console.log(findDuplicateChars(text));