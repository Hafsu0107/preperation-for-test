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
