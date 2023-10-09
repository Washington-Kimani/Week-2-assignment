// Question 1: Convert to Number Explicitly (15 points)
let numberStr = `45`;

//the explicit type conversion can be done with the `Number()` function
let number = Number(numberStr);

// checked for type and returned 'number'
console.log(typeof(number));
console.log(number);

// Question 2: Convert to String Explicitly(15 points)
let num = 1234;

//the explicit conversion of type `int` to 'string' can be done by using the 'String()' function
let str = String(num);

//checked for type and returned 'string'
console.log(typeof(str));
console.log(str);

//Question 3: Convert to Boolean Explicitly (15 points)
let truthyValue = 'code';
let falsyValue = 0;

let boolTrue = Boolean(truthyValue);
let boolFalsy = Boolean(falsyValue);

//Checking for the current types
console.log(`boolTrue is ${typeof(boolTrue)} and boolFalsy ${typeof(boolFalsy)}`);

//Logging the values after conversion and re-assignment
console.log(boolFalsy);
console.log(boolTrue);


// Question 4: Convert JavaScript Dates to Numbers(20 points)
let currentDate = new Date();
//getTime() function returns the stored rime in milliseconds since midnight January 1, 1970 UTC
console.log(currentDate.getTime());

// Convert JavaScript Dates to Strings (20 points)
//Crating a future date
let eventDate = new Date(2024, 0);

//Converting the date to the localeString
let locale = eventDate.toLocaleString();

//Logging the converted date to console;
console.log(locale);