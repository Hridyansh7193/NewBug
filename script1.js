// buggy.js

function calculateAverage(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) { // Off-by-one error
        sum += arr[i]; // Will cause undefined on last iteration
    }
    return sum / arr.length;
}

function findMax(arr) {
    let max = 0; // Incorrect initialization if array contains negative numbers
    arr.forEach(function(num) {
        if (num > max) {
            max = num;
        }
    });
    return max;
}

function updateDOM() {
    const element = document.getElementByID("output"); // Incorrect method name
    element.innerText = "Results updated!";
}

function isEven(num) {
    if (num % 2 == 0) { // Assignment instead of comparison
        return true;
    } else {
        return false;
    }
}

const numbers = [3, 7, 2, -5, 10];

console.log("Average:", calculateAverage(numbers));
console.log("Max:", findMax(numbers));
console.log("Is 10 even?", isEven(10));
updateDOM();
