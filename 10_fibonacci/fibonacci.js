const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (typeof num === "string") num = Number(num);

  if (num === 0) return 0;
  if (num === 1) return 1;

  let a = 0; // F(0)
  let b = 1; // F(1)
  let sum;
  console.log(num);
  for (let i = 2; i <= num; i++) {
    sum = a + b; // Sum of the previous two numbers
    a = b; // Update 'a' to the previous 'b'
    b = sum; // Update 'b' to the new sum
  }
  return b; // Return the 'num'th Fibonacci number
};

// Do not edit below this line
module.exports = fibonacci;
