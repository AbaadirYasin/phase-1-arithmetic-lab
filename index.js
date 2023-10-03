// Challenge 1: Multiply num1 and num2 to get 62
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

// Challenge 2: Generate a random integer greater than 0
const random = Math.ceil(Math.random() * 100); // Generates a random integer between 1 and 100

// Challenge 3: Calculate the remainder of dividing num3 by num4 to get 4
const num3 = 16;
const num4 = 3;
const mod = (num3 % num4) + num4;

// Challenge 4: Find the highest number in a set (20)
const max = Math.max(2, 5, 9, 16, 20);

// Export the variables so they can be tested
module.exports = {
  multiply,
  random,
  mod,
  max,
};

// Write your code here