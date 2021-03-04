/**
 * @function fizzBuzz
 * @param {Array<Number>} numbers
 * @returns return the array of digits passed in arguments, transformed like :
 *
 * if number can be divided by 3: display Fizz ;
 *
 * if number can be divided by 5: display Buzz ;
 *
 * if number can be divided by 3 AND 5 : display FizzBuzz ;
 *
 * else: display the number.
 *
 * fizzBuzz([1, 2, 3, 4, 5, ..., 15]) => [1, 2, "fizz", 4, "buzz", ... , "fizzBuzz"]
 */

function fizzBuzz(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError(
      "The first argument of 'increment' function, must be an 'Array'"
    );
  }

  return numbers.map((n) => {
    if (n % 3 === 0 && n % 5 === 0) return "fizzBuzz";
    else if (n % 3 === 0) return "fizz";
    else if (n % 5 === 0) return "buzz";
    else return n;
  });
}

console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
console.log("##############");
console.log(fizzBuzz([10, 20, 30, 40, 50, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
