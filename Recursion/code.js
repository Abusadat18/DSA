/* Question 1: Sum all numbers
Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6. */

/* SOLUTION 1 */
/* function sumRecursion(num,total=0) {
    if (num == 0) {
        return total;
    }
    return sumRecursion(num - 1, total + num);
}
const sum = sumRecursion(3);
console.log(sum); */

/* Q2)Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1. */

/* function recursivePow(e, n) {
    if (n == 0) {
        return 1;
    }
    return e * recursivePow(e, n - 1);
}
const power = recursivePow(3, 0);
console.log(power);
 */

/* Q3)Factorial */
/* function recursiveFactorial(n){
    if (n === 1) {
        return 1;
    }
    return n * recursiveFactorial(n - 1);
}
console.log(recursiveFactorial(5)); */

/* Q4)Product of Array */
/* function product(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr.shift() * product(arr);
}
const xyz = [1,2,3,10];
console.log(product(xyz)); */

/* Q5) Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value. */
/* var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt);
console.log(doesntHaveIt);

function contains(object, searchValue) {
  if (typeof object !== "object" || object === null) {
    return object === searchValue;
  }
  for (const value of Object.values(object)) {
    if (contains(value, searchValue)) {
      return true;
    }
  }
  return false;
} */

/* Q7) Parse a multi - dimensional array */
/* var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
console.log(seven);

function totalIntegers(array) {
  if (array.length === 0) return 0;

  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }
  return total + totalIntegers(array);
} */

/* Q8) Write a function that sums squares of numbers in list that may contain more lists */
/* var l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function SumSquares(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let total = 0;
  let first = arr.shift();
  if (Array.isArray(first)) {
    total += SumSquares(first);
  } else if (Number.isInteger(first)) {
    total += first * first;
  }
  return total + SumSquares(arr);
} */

/* Q9)The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array. */
console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []

function replicate(x, n, arr = []) {
  if (x <= 0) {
    return arr;
  }
  arr.push(n);
  return replicate(x - 1, n, arr);
}
