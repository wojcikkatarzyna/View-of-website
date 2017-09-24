/**
 * findSingleNumber - function which argument is string.
 * The string should contains numbers, where only one of them is even or odd.
 * This function return position of that single number.
 *
 * @param  {string} string - it contains numbers, sepereted by space.
 * It should contains only even numbers with single even one or opposite -
 * only even numbers with only one odd.
 * @return {number} - it return position of the single number (the only one even or odd in the string)
 */

function findSingleNumber(string) {

    /**
     * Create an array (str) with numbers from the string without spaces
     */
    let str = string.split(" ");

    /**
     * sumOfModulo - sum the rest of dividing each number by 2 (sum)
     * @param  {string} element - one element of array
     * @return {number} sum - sum the rest of dividing each number by 2 (sum)
     * if the sum is equal 1 -> the string contains only one odd number
     * if the sum is bigger than 1 -> the string contains only one even number
     */
    let sum = 0;
    function sumOfModulo(element) {
        sum += parseInt(element) % 2;
    }

    /**
     * use sumOfModulo for all elements in str array and define if it contains only one even or odd number
     */
    str.forEach(sumOfModulo);

    /**
     * find the index of single number and then increase it by 1
     * for string with only one odd number
     */
    if (sum === 1) {
        for (let i=0; i<str.length; i++) {
            let modulo = parseInt(str[i]) % 2;
            if (modulo > 0) {
                return i + 1;
            }
        }

   /**
    * for string with only one even number
    */
    } else {
        for (let i=0; i<str.length; i++) {
            let modulo = parseInt(str[i]) % 2;
            if (modulo === 0) {
                return i  + 1;
            }
        }
    }
}

const string1 = '2 4 5 8 10';
const string2 = '1 4 5 7 7 7';

const result1 = findSingleNumber(string1);
const result2 = findSingleNumber(string2);

console.log("The single number in string: " + string1 + " is on position no " + result1);
console.log("The single number in string: " + string2 + " is on position no " + result2);
