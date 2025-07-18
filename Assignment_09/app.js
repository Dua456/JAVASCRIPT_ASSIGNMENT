document.write("<h1>Functions</h1>");
//1. Write a function that displays current date & time in your browser.

document.write("<h3>1. Display Current Date & Time</h3>");

function displayDateTime() {
    const now = new Date();
    document.getElementById("dateTime").innerHTML = now.toString();
}

displayDateTime();

//2. Write a function that takes first & last name and then it greets the user using his full name.

document.write("<h3>2. Greet User with Full Name</h3>");

function greetUser(firsstName, lastName) {
    const fullName = firsstName + " " + lastName;
    document.write("Hello, " + fullName + "!")
}

greetUser("Dua", "Hussain");

//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

document.write("<h3>3. Add Two Numbers</h3>");

function addTwoNumbers() {
    const num1 = +prompt("Enter your first num");
    const num2 = +prompt("Enter your second num");
    const sum = num1 + num2;
    document.write("The sum is: " + sum)

}

addTwoNumbers()

// 4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and
// show the desired result in your browser.

document.write("<h3>4. Simple Calculator</h3>");

function calculator(num1, num2, operator) {
    let result
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else {
        result = "Invalid Operator";
    }
    document.write("Result: " + result);
}

calculator(10, 5, "*");


//5. Write a function that squares its argument.

document.write("<h3>5. Square of a Number</h3>");

function squares(number) {
    return number * number
}

document.write("square is: " + squares(5))


//6. Write a function that computes factorial of a number.

document.write("<h3>6. Factorial of a Number</h3>");

function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

document.write("Factorial is: " + factorial(5));


//7. Write a function that take start and end number as inputs & display counting in your browser.

document.write("<h3>7. Counting from Start to End</h3>");

function displayCounting(start, end) {
    let counting = "";
    for (let i = start; i <= end; i++) {
        counting += i + " ";
    }
    document.getElementById("countDisplay").innerText = counting;
}

displayCounting(1, 20);

// 8. Write a nested function that computes hypotenuse of a
//    right angle triangle.
//    Hypotenuse2 = Base2 + Perpendicular2
//    Take base and perpendicular as inputs.
//    Outer function : calculateHypotenuse()
//    Inner function: calculateSquare()

document.write("<h3>8. Hypotenuse of Right Angle Triangle</h3>");

function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(num) {
        return num * num;
    }

    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);

    const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

    return hypotenuse;
}

// Example: base = 3, perpendicular = 4
const result = calculateHypotenuse(3, 4);
document.write("Hypotenuse is: " + result);

// 9. Write a function that calculates the area of a rectangle. A = width * height
//    Pass width and height in following manner:

document.write("<h3>9. Area of a Rectangle</h3>");

//i. Arguments as value

function calculateArea(width, height) {
    return width * height;
}

document.write("Area of Rectangle: " + calculateArea(5, 10));

//ii. Arguments as variables

function calculateArea(width, height) {
    return width * height;
}

// Passing arguments as variables
var rectWidth = 7;
var rectHeight = 12;

document.write("Area of Rectangle: " + calculateArea(rectWidth, rectHeight))


// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
//     A palindrome is word, phrase, or sequence that reads the same backward asforward, e.g., madam.

document.write("<h3>10. Check Palindrome</h3>");

function isPalindrome(word) {
    let reversed = word.split('').reverse().join('');

    if (word === reversed) {
        alert("Yes, it's a palindrome.");
    } else {
        alert("No, it's not a palindrome.");
    }
}

isPalindrome("madam");

// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of 
//     each word of the string in upper case.
//     EXAMPLE STRING : 'the quick brown fox'
//     EXPECTED OUTPUT : 'The Quick Brown Fox'

document.write("<h3>11. Capitalize First Letter of Each Word</h3>");

function capitalizeWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}


document.write(capitalizeWords('the quick brown fox'));

// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//     EXAMPLE STRING : 'Web Development Tutorial'
//     EXPECTED OUTPUT : 'Development'

document.write("<h3>12. Find Longest Word</h3>");

function longestWord(str) {
    let words = str.split(' ');
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

document.write(longestWord('Web Development Tutorial'));

// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of
//     occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'

document.write("<h3>13. Count Specific Letter</h3>");

function countLetter(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}

document.write(countLetter('JSResourceS.com', 'o'));

// 14. The Geometrizer
//     Create 2 functions that calculate properties of a circle, using
//     the definitions here.

document.write("<h3>14. The Geometrizer</h3>");

// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference.toFixed(2) + "</br>");
}
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2.

function calcArea(radius) {
    let area = Math.PI * radius * radius;
    document.write("The area is " + area.toFixed(2));
}

calcCircumference(5);
calcArea(5);
