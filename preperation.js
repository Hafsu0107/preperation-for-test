let name = "Hello World";
console.log(name);

var a = "hafsa";
console.log(a);

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is even.");
  } else {
    console.log(number + " is odd.");
  }
}

// Example usage:
checkEvenOrOdd(10); // Output: 10 is even.
checkEvenOrOdd(7); // Output: 7 is odd.

var x = 8;
var y = 10;
console.log(x, y);

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"

const number = [4, 5, 6, 9, 0];
const maxNumber = Math.max(...number);
console.log(maxNumber);

const numbers = [4, 5, 6, 9, 0];
const minNumber = Math.min(...numbers);
console.log(minNumber);

let intro = {
  name: "Hafsa",
  age: 18,
  city: "Karachi",
};

console.log(intro);

setTimeout(() => {
  console.log("Hello");
}, 3000);

function removeDuplicate(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json)
  .then((data) => console.log(data))
  .catch((error) => console.error("Each fetching data:", error));
