/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  
function addNumbers() {
    // Get the values from the HTML form controls and convert them to numbers
    let add1 = Number(document.querySelector('#add1').value);
    let add2 = Number(document.querySelector('#add2').value);

    // Call the 'add' function and assign the result to 'sum'
    let sum = add(add1, add2);
  
    // Assign the 'sum' value to the HTML form element with ID 'sum'
    document.querySelector('#sum').value = sum;
  }  
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (num1, num2) {
  return num1 - num2;
};

// Event listener for subtraction
document.querySelector('#subtractNumbers').addEventListener('click', function () {
  const num1 = Number(document.querySelector('#subtract1').value);
  const num2 = Number(document.querySelector('#subtract2').value);
  const result = subtract(num1, num2);
  document.querySelector('#difference').value = result;
});

/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2;

// Event listener for multiplication
document.querySelector('#multiplyNumbers').addEventListener('click', () => {
  const num1 = Number(document.querySelector('#factor1').value);
  const num2 = Number(document.querySelector('#factor2').value);
  const result = multiply(num1, num2);
  document.querySelector('#product').value = result;
});

/* Open Function Use - Divide Numbers */
// Function declaration for division
//const divide = (num1, num2) => num1 / num2; 

// Event listener for division
document.querySelector('#divideNumbers').addEventListener('click', () => {
  const num1 = Number(document.querySelector('#dividend').value);
  const num2 = Number(document.querySelector('#divisor').value);
    // Check if num2 is 0 to avoid division by zero
    if (num2 === 0) {
      document.querySelector('#quotient').value = 'Cannot divide by zero';
    } else {
      const result = divide(num1, num2);
      document.querySelector('#quotient').value = result;
    }
  });
 
// Selection Structure - Calculate Total Due
document.querySelector('#getTotal').addEventListener('click', () => {
  const subtotal = Number(document.querySelector('#subtotal').value);
  const isMember = document.querySelector('#member').checked;
  let totalDue = subtotal;

  if (isMember) {
    totalDue *= 0.9; // Apply a 10% discount for club members
  }

  document.querySelector('#total').textContent = `$ ${totalDue.toFixed(2)}`;
});


/* Decision Structure */
// Get the current date
const currentDate = new Date();

// Get the current year using getFullYear()
const currentYear = currentDate.getFullYear();

// Assign the current year to the HTML element
document.querySelector('#year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
// Array Manipulation
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);