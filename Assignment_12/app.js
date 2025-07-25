//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

function power(a, b) {
    return a ** b
}

console.log(power(4, 3)); // 64
console.log(power(5, 2)); // 25

//2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
//Leap years ..., 2012, 2016, 2020, …

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        alert(year + " is a Leap Year.");
    } else {
        alert(year + " is Not a Leap Year.");
    }
}

var input = prompt("Enter a year:");
isLeapYear(parseInt(input));

// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    var S = calculateS(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    alert("Area of the triangle is: " + area.toFixed(2));
}

var a = parseFloat(prompt("Enter side a:"));
var b = parseFloat(prompt("Enter side b:"));
var c = parseFloat(prompt("Enter side c:"));

calculateArea(a, b, c);

// 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. 
// there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.

function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}

function calculatePercentage(marks1, marks2, marks3, totalMarks) {
    var obtained = marks1 + marks2 + marks3;
    return (obtained / (totalMarks * 3)) * 100;
}

function mainFunction() {
    var marks1 = parseFloat(prompt("Enter marks for Subject 1:"));
    var marks2 = parseFloat(prompt("Enter marks for Subject 2:"));
    var marks3 = parseFloat(prompt("Enter marks for Subject 3:"));
    var totalMarksPerSubject = 100;

    var avg = calculateAverage(marks1, marks2, marks3);
    var percent = calculatePercentage(marks1, marks2, marks3, totalMarksPerSubject);


    alert("Average Marks: " + avg.toFixed(2));
    alert("Percentage: " + percent.toFixed(2) + "%");
}

mainFunction();

// 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. 
// You can code for single character as of now.

function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

var inputString = prompt("Enter a string:");
var searchChar = prompt("Enter a character to find:");

var result = customIndexOf(inputString, searchChar);

if (result !== -1) {
    alert("Character found at index: " + result);
} else {
    alert("Character not found.");
}

//6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, "");
}

var input = prompt("Enter a sentence (max 25 characters):");
if (input.length <= 25) {
    alert("After removing vowels: " + removeVowels(input));
} else {
    alert("Sentence is longer than 25 characters!");
}

// 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.For example, in the sentence 
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

function countSuccessiveVowels(text) {
    var count = 0;
    var vowels = "aeiouAEIOU";

    for (var i = 0; i < text.length - 1; i++) {
        var first = text[i];
        var second = text[i + 1];

        switch (true) {
            case vowels.includes(first) && vowels.includes(second):
                count++;
                break;
        }
    }

    return count;
}

var line = "Pleases read this application and give me gratuity";
console.log("Number of successive vowel pairs:", countSuccessiveVowels(line));

// 8. The distance between two cities (in km.) is input through the keyboard. 
// Write four functions to convert and print this distance in meters, feet, inches and centimeters.

var distanceKm = parseFloat(prompt("Enter distance in kilometers:"));

function convertToMeters(km) {
    const metersPerKm = 1000;
    return km * metersPerKm;
}

function convertToFeet(km) {
    const feetPerKm = 3281;
    return km * feetPerKm;
}

function convertToInches(km) {
    const inchesPerKm = 39370;
    return km * inchesPerKm;
}

function convertToCentimeters(km) {
    const cmPerKm = 100000;
    return km * cmPerKm;
}

console.log(`User input: ${distanceKm} km`);
console.log(`Distance in meters: ${convertToMeters(distanceKm)}`);
console.log(`Distance in feet: ${convertToFeet(distanceKm)}`);
console.log(`Distance in inches: ${convertToInches(distanceKm)}`);
console.log(`Distance in centimeters: ${convertToCentimeters(distanceKm)}`);


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12;

    if (hoursWorked > regularHours) {
        var extraHours = hoursWorked - regularHours;
        var totalPay = extraHours * overtimeRate;
        return `Overtime Hours: ${extraHours}\nOvertime Pay: Rs. ${totalPay}`;
    } else {
        return "No overtime. Employee worked 40 hours or less.";
    }
}


const result = calculateOvertimePay(80);
console.log(result);

// 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

