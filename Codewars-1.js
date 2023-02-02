// Task-1
// Write a function "greet" that returns "hello world!"
const greet = (a = 'hello world!') => {
  return a;
};
// Task-2
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
const quarterOf = (month) => {
  let status;
  if (month <= 3) {
    status = 1;
  } else if (month <= 6) {
    status = 2;
  } else if (month <= 9) {
    status = 3;
  } else {
    status = 4;
  }
  return status;
};

// Task-3 capitalize the first letter
const capitalizeWord = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

// Task-4
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
const century = (year) => {
  let status;
  if (year <= 100) {
    status = 1;
  } else if (year < 1000 && year % 100 != 0) {
    status = Math.ceil(year / 100);
  } else if (year < 1000 && year % 100 === 0) {
    status = year / 100;
  } else if (year >= 1000 && year % 100 === 0) {
    status = year / 100;
  } else if (year >= 1000 && year % 100 != 0) {
    status = Math.ceil(year / 100);
  } else {
    status = year;
  }
  return status;
};
// const century = (year) => Math.ceil(year / 100); variant 2

/////////////////////////////////////////////////////////////////////////////////////////////////
// task-6
let a = '121';
console.log(Number(a));

// task-7 to binary
let toBinary = (n) => +n.toString(2);

// Task-8 even or odd
const evenOrOdd = (number) => {
  let status;
  if (number % 2 === 0) {
    status = 'Even';
  } else {
    status = 'Odd';
  }
  return status;
};

//  Task -9 Fake binary https://www.codewars.com/kata/fake-binary/javascript
function fakeBin(x) {
  return x
    .split('')
    .map((item) => {
      return +item >= 5 ? 1 : 0;
    })
    .join('');
}

// Task -10 Largest Square Inside A Circle https://www.codewars.com/kata/largest-square-inside-a-circle
function areaLargestSquare(r) {
  const d = r * 2;
  return d ** 2 / 2;
}

//Task-11 https://www.codewars.com/kata/number-of-decimal-digits
function digits(n) {
  return n.toString().length;
}

// Task-12  Opposite number https://www.codewars.com/kata/opposite-number
const opposite = (number) => -number;

// Task-13 Remove First and Last Character https://www.codewars.com/kata/remove-first-and-last-character
function removeChar(str) {
  return str.slice(1, -1);
}

// Task-14 Remove String Spaces https://www.codewars.com/kata/remove-string-spaces
function noSpace(x) {
  return x.replace(/\s/g, '');
}

// Task-15  Simple multiplication
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// Task- 15 String repeat
function repeatStr(n, s) {
  return s.repeat(n);
}

// Task- 16
const getNumberExplanation = (number) => {
  let status;
  switch (number) {
    case 666:
      status = 'devil number';
      break;
    case 42:
      status = 'answer for everything';
      break;
    case 7:
      status = 'prime number';
      break;
    default:
      status = null;
  }
  return status;
};
console.log(getNumberExplanation(42));

//Task - 17 final grade
function finalGrade(exam, projects) {
  let status;
  if (exam > 90 || projects > 10) {
    status = 100;
  } else if (exam > 75 && projects >= 5) {
    status = 90;
  } else if (exam > 50 && projects >= 2) {
    status = 75;
  } else {
    status = 0;
  }
  return status;
}

// Task- 18  Switch it Up!
switchItUp = (n) => ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][n];

// Task -19 Thinkful - Logic Drills: Traffic light

function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  } else if (current === 'yellow') {
    return 'red';
  } else if (current === 'red') {
    return 'green';
  }
}

// Task- 20 Third Angle of a Triangle https://www.codewars.com/kata/third-angle-of-a-triangle
function otherAngle(a, b) {
  return 180 - a - b;
}

// Task 21 Transportation on vacation https://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
  let status;
  if (d >= 7) {
    status = 40 * d - 50;
  } else if (d >= 3) {
    status = 40 * d - 20;
  } else {
    status = 40 * d;
  }
  return status;
}

// Task - 22  type of sum      codewars.com/kata/type-of-sum
const typeOfSum = (a, b) => typeof (a + b);

// Task -23 https://www.codewars.com/kata/will-you-make-it
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};

// Task- 24 prints the characters in reverse order
const printReversedWordBySymbol = (word) => {
  let i = word.length - 1;
  while (i >= 0) {
    console.log(word[i]);
    i = i - 1;
  }
};

// TAsk - 25
// string and a character as input and returns a new string that removes the passed character at all its positions. Character case is important.
var str = 'aba';
str.replace('a', ''); // results in 'ba'
str.replace(/a/g, ''); // results in 'b'

// Task - 26 How to remove a character from a string
const filterString = (str, char) => {
  let a = str.replace(char, '');
  //  let a = str.split(char).join('');
  return a;
};
