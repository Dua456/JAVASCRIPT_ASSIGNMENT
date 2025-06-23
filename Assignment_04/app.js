//1. Write a program to take “city” name as input from user.If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// User se city ka naam le rahe hain
var city = prompt("Enter your city name:");

// Agar user Karachi likhta hai to welcome message dikhayenge
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("what's your gender? ");
if (gender == "male") {
    alert("Good Morning Sir!");
} else if (gender == "female") {
    alert("Good Morning Ma'am");
}


//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

// User se traffic signal ka color le rahe hain
var color = prompt("Enter traffic signal color (Red, Yellow, Green):");

// Ab har color ke hisaab se message show karenge
if (color.toLowerCase() === "red") {
    alert("Must Stop");
}
else if (color.toLowerCase() === "yellow") {
    alert("Ready to Move");
}
else if (color.toLowerCase() === "green") {
    alert("Move Now");
}
else {
    alert("Invalid color! Please enter Red, Yellow, or Green.");
}

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”


// User se fuel ka amount (litres mein)ka input le rahe hain
var fuel = +prompt("Enter remaining fuel in your car (in litres):");

// Check kar rahe hain agar fuel 0.25 se kam hai
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
//a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

//b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

//c
var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}


//e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

//f
if ("car" < "cat") {
    alert("car is smaller than cat");
}


//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page.
//  Take percentage & compute grade as per following table:


// User se 3 subjects ke obtained marks le rahe hain
var marks1 = +prompt("Enter marks obtained in Subject 1:");
var marks2 = +prompt("Enter marks obtained in Subject 2:");
var marks3 = +prompt("Enter marks obtained in Subject 3:");

// User se total marks le rahe hain
var totalMarks = +prompt("Enter total marks:");

// Ab total obtained marks aur percentage calculate kar rahe hain
var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / totalMarks) * 100;

// Grade aur Remarks assign karne ke liye if else use kar rahe hain
var grade = "";
var remarks = "";

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

// Result show kar rahe hain page pe (without box)
document.write("<h2>Marks Sheet</h2>");
document.write("<p>Total marks : " + totalMarks + "</p>");
document.write("<p>Marks obtained : " + obtainedMarks + "</p>");
document.write("<p>Percentage : " + percentage.toFixed(0) + "%</p>");
document.write("<p>Grade : " + grade + "</p>");
document.write("<p>Remarks : " + remarks + "</p>");

//7. Guess game:

// Secret number 1 se 10 ke darmiyan store kar rahe hain
var secretNumber = 7; // You can change this or make it random

// User se num guess kar rahe hain
var userGuess = +prompt("Guess the secret number (1 to 10):");

//condition check kar rahe hain
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong guess. Try again!");
}


//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// Ask the user to enter a number
var divisible=parseInt(prompt("Enter a number divisible by 3 : "));

// Check if the number is divisible by 3
if (divisible%3 ==0){
    alert("Number is divisible by 3 ");
}else{
    alert("Not divisible by 3");
}

//9. Write a program that checks whether the given input is an even number or an odd number.

// Ask the user to enter a number
var number = +prompt("Enter a number to check if it's even or odd:");

// Check if the number is even or odd
if (number % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}

//10. Write a program that takes temperature as input and shows a message based on following criteria

// Ask the user to enter the temperature
var temperature = +prompt("Enter the temperature:");

// Check the temperature and show the appropriate message
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("It’s very cold today!");
}


// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:

// Take inputs from the user
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operator = prompt("Enter the operation (+, -, *, /, %):");

// Perform the operation using if statements
if (operator === "+") {
  alert("Result: " + (num1 + num2));
} else if (operator === "-") {
  alert("Result: " + (num1 - num2));
} else if (operator === "*") {
  alert("Result: " + (num1 * num2));
} else if (operator === "/") {
  if (num2 !== 0) {
    alert("Result: " + (num1 / num2));
  } else {
    alert("Error: Division by zero is not allowed.");
  }
} else if (operator === "%") {
  alert("Result: " + (num1 % num2));
} else {
  alert("Invalid operator. Please enter +, -, *, / or %.");
}
