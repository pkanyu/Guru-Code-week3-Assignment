// Question 1
const number = "45";
console.log(Number(number));

// Question 2
// For the first part
const printSum = Number("20") + 40; 
console.log(printSum); // This will print 60

// For the second part
const sentence = "I am " + (23 + 4) + " years old";
console.log(sentence); // This will print "I am 27 years old"


// Question 3
const myValue = "May"; // Corrected the typo here
myValue = 86; // This line will throw an error because 'const' variables cannot be reassigned.

// The correct code is:
let myValue = "May"; // Changed 'const' to 'let'
myValue = 86; 
console.log(myValue); // This will print 86


// Question 4
let firstName = "Peterson";        
let lastName = "Kariuki";         
let guruCodingCourse = "JavaScript Basics"; 
let testScore = 85;           

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Course: ${guruCodingCourse}`);
console.log(`Test Score: ${testScore}`);


// Question 5
let testScore = 85; // Our sample score

let grade;

if (testScore < 0) {
    grade = "No test score";
} else if (testScore < 30) {
    grade = "F";
} else if (testScore <= 40) {
    grade = "E";
} else if (testScore <= 49) {
    grade = "D";
} else if (testScore <= 59) {
    grade = "C";
} else if (testScore <= 69) {
    grade = "B";
} else if (testScore <= 100) {
    grade = "A";
} else {
    grade = "Test score is out of range";
}

console.log(`With a test score of ${testScore}, your grade is: ${grade}`);

// Question 6


// Declare a variable 'i' for iteration
for (let i = 1; i <= 20; i++) {
    // The 'for' loop starts with 'i' initialized to 1
    // The loop will continue as long as 'i' is less than or equal to 20
    // After each iteration, 'i' is incremented by 1

    console.log(i); // Print the current value of 'i' to the console
}




