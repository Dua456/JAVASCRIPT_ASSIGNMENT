// chapter 6 to 9

//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

var a = 10;
document.write("Result:", "<br>")
document.write("The value of a is: " + a + "<br><br>");

// Pre-increment
document.write("The Value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-increment
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-decrement
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-decrement
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");



//2. What will be the output in variables a, b & result after execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

//Explain the output at each stage:

var a = 2, b = 1;

document.write("Initial values:<br>");
document.write("a = " + a + "<br>");
document.write("b = " + b + "<br><br>");

// Step 1: --a
--a;
document.write("Step 1: --a<br>");
document.write("a becomes: " + a + "<br><br>");

// Reset values for full expression
a = 2;
b = 1;

// Step 2: --a - --b
var step2 = --a - --b;
document.write("Step 2: --a - --b<br>");
document.write("a = " + a + ", b = " + b + "<br>");
document.write("Result: " + step2 + "<br><br>");

// Reset again for next step
a = 2;
b = 1;

// Step 3: --a - --b + ++b
var step3 = --a - --b + ++b;
document.write("Step 3: --a - --b + ++b<br>");
document.write("a = " + a + ", b = " + b + "<br>");
document.write("Result: " + step3 + "<br><br>");

// Reset again for final step
a = 2;
b = 1;

// Step 4: --a - --b + ++b + b--
var result = --a - --b + ++b + b--;
document.write("Step 4: --a - --b + ++b + b--<br>");
document.write("1 - 0 + 1 + 1 = 3<br>");
document.write("Final a = " + a + "<br>");
document.write("Final b = " + b + "<br>");
document.write("Final result = " + result + "<br>");


//   Write a program that takes input a name from user & greet the user.

var userName = prompt("Enter your nume :");
alert("Hello " + userName + "!");


// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5
// should be displayed by default.

// User se number input lene ke liye prompt use kiya gaya hai. Default value 5 hai.
var userInput = prompt("Enter a number to display its multiplication table:", "5");

// Input ko number mein convert kiya gaya hai. Agar input empty ya invalid ho to 5 use hoga.
var number = +userInput || 5;

// Table ka heading display karne ke liye
document.write("<h2>Multiplication Table of " + number + "</h2>");

// 1 se 10 tak loop chalega aur har step mein table ka ek line print karega
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}


//6. Take

// 3 subjects ke naam user se le rahe hain
var subject1 = prompt("Enter name of first subject:");
var subject2 = prompt("Enter name of second subject:");
var subject3 = prompt("Enter name of third subject:");

// Har subject ka total marks 100 hoga
var totalMarksPerSubject = 100;

// Har subject ke obtained marks user se le rahe hain
var obtained1 = +prompt("Enter obtained marks for " + subject1 + ":");
var obtained2 = +prompt("Enter obtained marks for " + subject2 + ":");
var obtained3 = +prompt("Enter obtained marks for " + subject3 + ":");

// Har subject ka percentage calculate kar rahe hain
var percentage1 = (obtained1 / totalMarksPerSubject) * 100;
var percentage2 = (obtained2 / totalMarksPerSubject) * 100;
var percentage3 = (obtained3 / totalMarksPerSubject) * 100;

// Total marks aur percentage calculate kar rahe hain
var totalMarks = totalMarksPerSubject * 3;
var obtainedTotal = obtained1 + obtained2 + obtained3;
var totalPercentage = (obtainedTotal / totalMarks) * 100;

// Ab result browser pe show kar rahe hain table ke through
document.write("<h2>Marks Sheet</h2>");
document.write("<table border='1' cellpadding='8'>");

// Table ka heading row bana rahe hain
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

// Har subject ka data row mein dikhaya
document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + obtained1 + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + obtained2 + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + obtained3 + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>");

// Total marks aur obtained marks ka row
document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + obtainedTotal + "</th><th>" + totalPercentage.toFixed(2) + "%</th></tr>");

document.write("</table>");