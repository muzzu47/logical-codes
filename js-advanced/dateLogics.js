const testDate = new Date();

console.log("Date now value :", testDate);
console.log("Date value :",testDate.getUTCHours(),testDate.getHours(), testDate.getUTCMinutes(), testDate.getMinutes());


const customDate = new Date("2025-03-07T00:00:00.000Z");
const newDate = new Date();

console.log("Date now value :", newDate);
console.log("Date value :",customDate.getUTCHours(),customDate.getHours(), customDate.getUTCMinutes(), customDate.getMinutes());