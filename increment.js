/**
 * @function increment
 * @param {Array<Number>} number
 * @returns return the array of digits passed in arguments, incremented by 1
 *
 * increment([1, 2, 3]) => [1, 2, 4]
 *
 * increment([9, 9]) => [1, 0, 0]
 */

function increment(number) {
  if (!Array.isArray(number)) {
    throw new TypeError(
      "The first argument of 'increment' function, must be an 'Array'"
    );
  }

  /*
  La solution qui me semblait la plus naturelle :

    const convertedArray = [...number].join("");
    const newValue = parseInt(convertedArray) + 1;
    return newValue
      .toString()
      .split("")
      .map((el) => parseInt(el));
*/

  const output = [...number.reverse()];

  /* initialement j'utilisais la methode .forEach(), 
  mais je n'avais pas la possibilité de sortir simplement de la boucle.
  la methode .every() règle ce problème */

  output.every((num, index) => {
    if (num < 9) {
      output[index] += 1;
      return false;
    } else {
      output[index] = 0;
      return true;
    }
  });

  if (output[output.length - 1] === 0) output.push(1);

  return output.reverse();
}

console.log(increment([1, 2, 3]));
console.log("##############");
console.log(increment([9, 9]));

console.log("##############");
console.log(increment([1, 9, 9]));
console.log("##############");
console.log(increment([1, 2, 9, 8, 9]));
