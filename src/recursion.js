/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if (n < 0) {
		return null;
	}
	if (n === 0) {
		return 1
	}
	return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
  	return 0;
  }
  if (result === undefined) {
  	var result = array.slice();
  }
  if (result.length === 1) { // base case
  	return result[0];
  }
  result[0] += result.pop();
  return sum(result);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	if (array.length === 0) { // edge case
		return 0;
	}

	if (result === undefined) { // creates a copy of the input array
		var result = array.slice().flat(Infinity);
	}

	if (result.length === 1) { // base case
		return array[0];
	}
	
	result[0] += result.pop();
	return arraySum(result);

};

// 4. Check if a number is even.
var isEven = function(n) {
	n = Math.abs(n);
	if (n >= 2) {
		n -= 2;
		return isEven(n);	
	}
	if (n === 1) {
		return false;
	} else {
		return true;
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
if (sign === undefined) {
    var sign = 1;
    if (n < 0) {
      sign = -1;
      n = Math.abs(n);
    }
  }
	if (n === 0) {
		return 0;
	}
    return sign * ((n - 1) + sumBelow(n - 1));
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	if (x === y || x - 1 === y || x + 1 === y) { // edge case
		return [];
	}

	var isArray = Array.isArray(x);

	if (!isArray) {
		var isReverse;
		if (x > y) {
			isReverse = true;
		} else {
			isReverse = false;
		}
	} else {
		var isReverse;
		if (x[0] > x[1]) {
			isReverse = true;
		} else {
			isReverse = false;
		}
	}

	if (!isReverse) {
		if (x[x.length - 1] + 1 >= y) {
			return x;
		}
	} else {
		if (x[x.length - 1] - 1 <= y) {
			return x;
		}
	}

		if (!isArray) {
			if (!isReverse) {
				var val = x + 1;
			} else {
				var val = x - 1;
			}
				x = [val];
		}

		if (!isReverse) {
			x.push(x[x.length - 1] + 1);
		} else {
			x.push(x[x.length - 1] - 1);
		}

	return range(x, y);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if (exp === 0) {
		return 1;
	}

	if (exp < 0) {
		var isNegative = true;
		exp = exp * -1;
	}

	if (exp === 1) {
		return base;
	}

	if (!isNegative) {
		return base * exponent(base, exp - 1);
	} else {
		return (1 / (base * exponent(base, exp - 1)));
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if (n === 1) {
		return true;
	}

	var result = n / 2;

	if (result === 1) {
		return true;
	}

	if (result < 2) {
		return false;
	}

	return powerOfTwo(result);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	// create a result string
	var result = '';
	var lastIndex = string.length - 1;
	// add the last character to result strig
	if (string.length === 0) { // base case
		return string
	}
	result += string[lastIndex];
	// return the result string + string sliced to before the last character
	return result + reverse(string.slice(0, lastIndex));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	var lower = string.toLowerCase();
	string = lower;
	// return value is a boolean
	if (string.length === 0) { // base case
		return true;
	}

	var first = string[0];
	var last = string[string.length - 1];
	var isEqual = first === last;
	var newString = string.slice(1, string.length - 1);
	return isEqual && palindrome(newString);

	// take what's given and check if it is a palidrome
	// recurse passing string without first and last character
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if (y < 0) {
		y = -y;
	}
	
	if (y === 0) {
		return NaN;
	}

	if (x < y) {
		if (x >= 0) {
			return x;
		} else {
			var isNegative = true;
			x = -x;
			if (x < y) {
				return -x;
			}
		}
	}

	if (isNegative) {
		return -(modulo(x - y, y));
	} else {
		return modulo(x - y, y);
	}
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
	if (x === 0 || y === 0) {
		return 0;
	}
	var isNegativeX;
	var isNegativeY;
	if (x < 0) {
		isNegativeX = true;
		x = -(x);
	} else {
		isNegativeX = false;
	}

	if (y < 0) {
		isNegativeY = true;
		y = -(y); 
	} else {
		isNegativeY = false;
	}

	if (y === 1) {
		return x;
	}

	var isNegative = false;

	if (isNegativeX && isNegativeY) {
		isNegative = false;

	} else if (isNegativeX || isNegativeY) {
		isNegative = true;
	}

	if (!isNegative) {
		return x + multiply(x, y - 1);
	} else {
		return -(x + multiply(x, y - 1));
	}
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
		if (x < 0 && y < 0) {
		x = -(x);
		y = -(y);
	}

	if (y === 0) {
		return NaN;
	}

	if (y > x) {
		return 0;

	
		
	}
  if (typeof(y) !== 'object') {
  	var object = {'divisor': y};
  	y = object;
  	y.quotient = 0;
  }

    if (x >= y.divisor) {
          y.quotient++;
          var remainder = x - y.divisor;

    }

    if (remainder >= 0 && remainder < y.divisor) {
    	return y.quotient;
    }

    x = remainder;
    return divide(x, y);
  };

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) { // The Euclidean Algorithm
	
	if (x <= 0 || y <=  0) {
		return null;
	}

	//swap so the first number is greater
	if (y > x) {
		var swap = x;
		x = y;
		y = swap;
	}

	if (x % y === 0) {
		return y;
	}

	// Apply the Euclidean Algorithm
	var r = x % y;
	// var q = Math.round(x/y);

	x = y;
	y = r;

	return gcd(x, y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if (str1.length > str2.length) { // to make sure str1 is always shorter. Thus, reaching at '' quicker
		var a = str1;
		var b = str2;
		str1 = b;
		str2 = a;
	}

	if (str1 === '') {
		if (str2 === '') {
			return true;
		} else {
			return false;
		}
	}

	str1 = str1.slice(0, str1.length - 1);
	str2 = str2.slice(0, str2.length - 1);
	return compareStr(str1, str2);

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	if (Array.isArray(str)) {
		if (str[0].length === 1) {
			return str;
		} else {
			if (str[0].length > 1) {
			var el = str[0];
			var char = el[el.length - 1];
			str.splice(1, 0, char);
			str[0] = el.slice(0, el.length - 1);
		}
	}
	} else {
		if (str.length === 1) {
			return [str];
		}
		result = [];
		var char = str[str.length - 1];
		result.push(char);
		str = str.slice(0, str.length - 1);
		result.unshift(str);
	}
	return createArray(result);
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	// debugger;
	var result = [];
	if (array.length === 1) {
		return array[0];
	}
	result.push(array.pop());
	return result.concat(reverseArr(array));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var result = [];
  if (length === 1 && value === undefined) {
		return [undefined];
	}

  if (length === 1 && Array.isArray(value) && value.length === 0 ) {
    return [[]];
  }

	if (length === 1) {
		return value;
	}
  
	result.push(value);
	length --;
	return result.concat(buildList(value, length));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	// return value is an array
	var result = [];
	var pushVal = '';

	if (n === 1) {
		return '1';
	}

	// get the equivalent value and shift it
	if (n % 3 === 0 && n % 5 === 0) {
		pushVal = 'FizzBuzz';
	} else if (n % 5 === 0) {
		pushVal = 'Buzz';
	} else if (n % 3 === 0) {
		pushVal = 'Fizz';
	} else {
		pushVal = n.toString();
	}
	result.push(pushVal);
	n--;
	// in the return line of the recursion, concatenated to the array
	return [...fizzBuzz(n), ...result];
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	if (array.length === 1 && array[0] === value) {
		return 1;
	} else if (array.length === 1) {
		return 0;
	}

	var count = 0;
	var popped = array.pop();

	if (popped === value) {
		count++;
	}

	return count + countOccurrence(array, value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	if (Array.isArray(array)) {
		var result = [];
	} else {
		return callback(array);
	}

	array.forEach(el => result.push(rMap(el, callback)));
	return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	// return value is a number
	let result = obj.hasOwnProperty(key)? 1: 0;
	for (var k in obj) {
		var value = obj[k];
		if (!Array.isArray(value) && typeof value === 'object') {
			result += countKeysInObj(value, key);
		}
	}
	return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	// return value is a number
	var result = 0;
	// iterate over the object
	for (var k in obj) {
		var v = obj[k];
		if (v === value) {
			result++;
		}

		if (!Array.isArray(v) && typeof v === 'object') {
			result += countValuesInObj(v, value);
		}
	}
	return result;

};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	    for (let k in obj) {
        let objKey = k;
        if (k === oldKey) {
            obj[newKey] = obj[oldKey];
            delete obj[oldKey];
            objKey = newKey;
        } else {
            objKey = k;
        }
        
        if (!Array.isArray(obj[objKey]) && typeof obj[objKey] === 'object') {
            obj[objKey] = replaceKeysInObj(obj[objKey], oldKey, newKey);
        }        
    }
    return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	// edge case: n is 0 or negative
	if (n <= 0) {
		return null;
	}

	if (n === 1) {
		return [0, 1];
	}

	let fibo2 = fibonacci(n - 2); // can be null
	let fibo1 = fibonacci(n - 1);

	let sum;
	if (fibo2 === null) {
		sum = fibo1[fibo1.length - 1]; // gets the last element
	} else {
		let el1 = fibo1[fibo1.length - 1];
		let el2 = fibo2[fibo2.length - 1];
		sum = el1 + el2;
	}
	fibo1.push(sum);
	return fibo1;

};

/*

fibo(3) = [0, 1, 1, 2]
	fibo(2) = [0, 1, 1]
	fibo(0) = null
		fibo(1) = [0, 1]
	fibo(1) = [0, 1]
fibo(4) = [0, 1, 1, 2, 3]
	fibo(2) = [0, 1, 1]
	fibo(3) = [0, 1, 1, 2]

*/

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if (n < 0) {
		return null;
	}

	if (n === 0) {
		return 0;
	}

	if (n === 1) {
		return 1;
	}

	let sum;

	let el1 = nthFibo(n - 1);
	let el2 = nthFibo(n - 2);

	if (el2 === null) {
		sum = el1;
	} else {
		sum = el1 + el2;
	}

	return sum;

};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	let copy = array.slice();
	let result = [];

	if (array.length === 1) {
		array[0] = array[0].toUpperCase();
		return array;
	}

	let el = copy.pop().toUpperCase();
	result.unshift(el);

	return [...capitalizeWords(copy), ...result];
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	let copy = array.slice();
	// return value is an array
	let result = [];

	if (array.length === 1) {
		let el = array[0];
		let elProper = el[0].toUpperCase() + el.slice(1).toLowerCase();
		array[0] = elProper;
		return array;
	}

	let el = copy.pop();
	let elProper = el[0].toUpperCase() + el.slice(1).toLowerCase();

	result.push(elProper);

	return [...capitalizeFirst(copy), ...result];
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	// return value is a number
	let sum = 0;

	for (const k in obj) {
		let el = obj[k];
		if (typeof el === 'number' && el % 2 === 0) {
			sum += el;
		} else if (!Array.isArray(el) && typeof el === 'object') {
			sum += nestedEvenSum(el);
		}
	}

	return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
	// return value is an array
	let result = [];
	// iterate for every element in the array
	array.forEach(el => {
		if (Array.isArray(el)) {
			result = [...result, ...flatten(el)]
		} else {
			result.push(el);
		}
	});
	return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	let result;

	if (str.length === 0) {
		return obj;
	}

	if (obj === undefined) {
		result = {};
	} else {
		result = obj;
	}

	let char = str[0];
	if (result[char] === undefined) {
		result[char] = 1;
	} else {
		result[char]++;
	}
	str = str.slice(1);

	// console.log(result);
	return letterTally(str, result);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
	let result  = [];

	if (list.length === 0) {
		return result;
	}

	let copy = list.slice();
	let el = copy.shift();

	if (el !== copy[0]) {
		result.push(el);
	}

	return result.concat(compress(copy));
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	let el = array[array.length - 1];
	if (el.indexOf(aug) > -1) {
		return array;
	}

	el.push(aug);
	array.unshift(array.pop());
	return augmentElements(array, aug);
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	let result = [];

	if (array.length === 0) {
		return result;
	}

	let el = array.shift();

	if (el !== array[0]) {
		result.push(el);
	}

	return result.concat(minimizeZeroes(array));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
	let result = [];
	let copy = array.slice();
	let lastCopyEl = copy[copy.length - 1];
	
	// sign setting
	if (lastCopyEl !== 'pos' && lastCopyEl !=='neg') {
		copy.push('neg');
	} else {
		if (lastCopyEl === 'pos') {
			copy[copy.length - 1] = 'neg';
		} else {
			copy[copy.length - 1] = 'pos';
		}
	}

	if (copy.length === 1) {
		return result;
	}

	let el = Math.abs(copy.shift());
	
	if (copy[copy.length - 1] === 'neg' || el === 0) {
		result.push(el);
	} else {
		result.push(-el);
	}

	return result.concat(alternateSign(copy));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	if (str.length === 0) {
		return '';
	}
	let numStrings = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7:'seven', 8: 'eight', 9: 'nine'};
	let result = '';
	let letter = str[0];
	let char;

	if (isNaN(parseInt(letter))) {
		char = letter;
	} else {
		char = numStrings[parseInt(letter)];
	}

	str = str.slice(1);

	result += char;

	return result + numToText(str);
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
