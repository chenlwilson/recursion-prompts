/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if (n < 0) {
		return null;
	} else if (n === 0) {
		return 1;
	} else {
		return (n * factorial(n-1));
	}
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	if (array.length === 0) {
		return 0;
	} else {
		return array[0] + sum(array.slice(1));
	}
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	if(array.length === 0) {
		return 0;
	} else if(typeof array[0] === "number") {
		return array[0] + arraySum(array.slice(1));
	} else if(Array.isArray(array[0])) {
		return arraySum(array[0]) + arraySum(array.slice(1));
	}
};

// 4. Check if a number is even.
var isEven = function(n) {
	if (n === 0) {
		return true;
	} else if (n === 1) {
		return false;
	} else if (n > 1) {
		return isEven(n - 2);
	} else {
		return isEven(n + 2);
	}
};


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if (n === 0) {
		return 0;
	} else if (n > 0) {
		return n - 1 + sumBelow(n - 1);
	} else if (n < 0) {
		return n + 1 + sumBelow(n + 1);
	}
}

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
// range(-9,-2); // [-8, -7, -6, -5, -4, -3]
// range(2,3); // []
// range(2,2); // []
// range(2,1); // []
// range(4,1); // [3,2]
var range = function(x, y) {
	var result = [];
	if (x - y >= -1 && x - y <= 1 ) {
		return result;
	} else if (x < y) {
		result.push(x + 1);
		return result.concat(range(x + 1, y));
	} else {
		result.push(x - 1);
		return result.concat(range(x - 1, y));
	}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	//optimize for even number solution
	if (exp === 0) {
		return 1;
	} else if (exp < 0) {
		return 1 / exponent(base, -exp);
	} else if (exp % 2 === 0) {
		return base * base * exponent(base, exp - 2);
	} else if (exp % 2 === 1) {
		return base * exponent(base, exp - 1);
	}
}

// var exponent = function(base, exp) {
// 	if (exp === 0) {
// 		return 1;
// 	} else if (exp > 0) {
// 		return base * exponent(base, exp - 1);
// 	} else if (exp < 0) {
// 		return 1 / (base * exponent(base, -1 - exp));
// 	}
// };

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if (n === 1) {
		return true;
	} else if (n < 2 && n >= 0) {
		return false;
	} else {
		return powerOfTwo(n / 2);
	}
};


// 9. Write a function that reverses a string.
var reverse = function(string) {
	var result = '';
	if(string.length===0) {
		return result;
	} else {
		result += string.charAt(string.length-1);
		return result + reverse(string.slice(0, string.length-1));
		//another working solution:
		//return result.concat(string.charAt(string.length-1)).concat(reverse(string.slice(0, string.length-1)));
	}
}

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	var lowerStr = string.toLowerCase();
	if(lowerStr.length <= 1) {
		return true;
	} else if (string.length > 1) {
		if(lowerStr[0] === lowerStr[lowerStr.length-1]) {
			return palindrome(lowerStr.slice(1, lowerStr.length-1));
		} else {
			return false;
		}
	}
}

//
// var palindrome = function(string) {
// 	if (string.length === 1) {
// 		return true;
// 	}
// 	if (string.length > 0 && string.charAt(0).toLowerCase() === string.charAt(string.length - 1).toLowerCase()) {
// 		return true && palindrome(string.slice(1, length-1));
// 	}
// 	return false;
// };

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

var modulo = function(x, y) {
	if (y === 0) {
		return NaN;
	}
	if (x < 0) {
		return -modulo(-x, y);
	}
	if (y < 0) {
		return modulo(x, -y);
	}
	if (x < y) {
		return x;
	}
	return modulo(x - y, y);
}

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
	if (x < 0) {
		return -multiply(-x, y);
	}
	if (y < 0) {
		return -multiply(x, -y);
	}
	if (y === 0) {
		return 0;
	}
	return x + multiply(x, y - 1);
}

// var multiply = function(x, y) {
// 	if (x === 0 || y === 0) {
// 		return 0;
// 	} else if (x > 0 && y > 0) {
// 		return x + multiply(x, (y - 1));
// 	} else if (x < 0 && y < 0) {
// 		return -x + multiply(x, (y + 1));
// 	} else if (x < 0 || y < 0) {
// 		return -multiply(x, -y);
// 	}
// };

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
	var count = 0;
	if (x < 0) {
		return -divide(-x, y);
	}
	if (y < 0) {
		return -divide(x, -y);
	}
	if (y === 0) {
		return NaN;
	}
	if (x < y) {
		return count;
	}
	return count += 1 + divide(x - y, y);
}
//
// var divide = function(x, y) {
// 	if (y === 0) {
// 		return NaN;
// 	} else if (x - y < 0) {
// 		return 0;
// 	} else if (x < 0 && y < 0) {
// 		return divide(-x, -y);
// 	} else if (x < 0 && y > 0) {
// 		return divide(-x, y);
// 	} else if (x > 0 && y < 0) {
// 		return divide(x, -y);
// 	} else {
// 		return divide(x - y, y) + 1;
// 	}
// };

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

var gcd = function(x, y) {
	if (x <= 0 || y <= 0) {
		return null;
	} else if (y > x) {
		return gcd(y, x);
	} else if (x % y === 0) {
		return y;
	} else {
		return gcd(y, x % y);
	}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if (str1.length === 0 && str2.length === 0) {
		return true;
	} else if (str1[0] !== str2[0]) {
		return false;
	} else if (str1[0] === str2[0]){
		return compareStr(str1.slice(1), str2.slice(1));
	}
}

// var compareStr = function(str1, str2) {
// 	if (str1.charAt(0) === str2.charAt(0) && str1.length <= 1 && str1.length === str2.length) {
// 		return true;
// 	} else if (str1.charAt(0) === str2.charAt(0)) {
// 		return true && compareStr(str1.slice(1), str2.slice(1));
// 	} else {
// 		return false;
// 	}
// };

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	var result = [];
	if (str.length === 0) {
		return result;
	} else {
		result.push(str[0]);
		return result.concat(createArray(str.slice(1)));
	}
}

// var createArray = function(str) {
// 	var arr = [];
// 	if (str.length === 0) {
// 		return arr;
// 	} else {
// 		arr.push(str.charAt(0));
// 		return arr.concat(createArray(str.slice(1)));
// 	}
//};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	var result = [];
	if (array.length === 0) {
		return result;
	} else {
		result.push(array[array.length - 1]);
		return result.concat(reverseArr(array.slice(0, array.length - 1)));
	}
}

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	var result = [];
	if (length === 0) {
		return result;
	} else {
		result.push(value);
		return result.concat(buildList(value, length - 1));
	}
}

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	var result = [];
	if (n === 0) {
		return result;
	} else if (n % 3 === 0 && n % 5 === 0) {
		result.push('FizzBuzz');
		return fizzBuzz(n - 1).concat(result);
	} else if (n % 3 === 0) {
		result.push('Fizz');
	} else if (n % 5 === 0) {
		result.push('Buzz');
	} else {
		result.push(n.toString());
	}
	return fizzBuzz(n - 1).concat(result);
}

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	var count = 0;
	if (array.length === 0) {
		return count;
	} else if (array[0] === value) {
		count++;
	}
	return count += countOccurrence(array.slice(1), value);
}

// var countOccurrence = function(array, value) {
// 	if (array.length === 0) {
// 		return 0;
// 	} else if (array[0] === value) {
// 		return countOccurrence(array.slice(1), value) + 1;
// 	} else {
// 		return countOccurrence(array.slice(1), value);
// 	}
// };

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	var result = [];
	if (array.length === 0) {
		return result
	} else {
		result.push(callback(array[0]));
		return result.concat(rMap(array.slice(1), callback));
	}
}


// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj({'r':'e'}, 'r') // 1
// countKeysInObj({'r':{'a':'e'}, 'a') // 1
var countKeysInObj = function(obj, key) {
	var count = 0;
	for (var prop in obj) {
		if (prop === key) {
			count++;
		}
		if (typeof obj[prop] === 'object') {
			count += countKeysInObj(obj[prop], key);
		}
	}
	return count;
}

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var count = 0;
	for (var prop in obj) {
		if (obj[prop] === value) {
			count++;
		}
		if (typeof obj[prop] === 'object') {
			count += countValuesInObj(obj[prop], value);
		}
	}
	return count;
}

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	for (var key in obj) {
		if (key === oldKey) {
			obj[newKey] = obj[key];
			replaceKeysInObj(obj[newKey], oldKey, newKey);
			delete obj[key];
		}
		if (typeof obj[key] === 'object') {
			replaceKeysInObj(obj[key], oldKey, newKey);
		}
	}
	return obj;
}

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	var result = [0, 1];
	if (n < 1) {
		return null;
	} else if (n === 1){
		return [0, 1];
	} else {
		return fibonacci(n-1).concat(fibonacci(n-1)[n-2] + fibonacci(n-1)[n-1]);
	}
}

// var fibonacci = function(n) {
// 	if (n < 1) {
// 		return null;
// 	} else if (n === 1) {
// 		return [0, 1];
// 	}
// 	var arr = fibonacci(n-1);
// 	arr.push(arr[n-2]+arr[n-1]);
// 	return arr;
//
// };

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if (n < 0) {
		return null;
	} else if (n < 2) {
		return n;
	} else {
		return nthFibo(n - 1) + nthFibo(n - 2);
	}
}

///////////////////////////////////////////////////////////////////////////////////////
// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	result = [];
	if (array.length === 0) {
		return result;
	} else {
		result.push(array[0].toUpperCase());
		return result.concat(capitalizeWords(array.slice(1)));
	}
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	var result = [];
	if (array.length === 0) {
		return result;
	} else {
		var firstLetter = array[0].charAt(0).toUpperCase();
		var otherLetters = array[0].slice(1);
		result.push(firstLetter + otherLetters);
		return result.concat(capitalizeFirst(array.slice(1)));
	}
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
	var result = 0;
	Object.keys(obj).forEach(function(key) {
		if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
			result += obj[key];
		}
		if (typeof obj[key] === 'object') {
			result += nestedEvenSum(obj[key]);
		}
	});
	return result;
};



// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
	var result = [];
	array.forEach(function(item) {
		if (typeof item === 'number') {
			result.push(item);
		} else if (Array.isArray(item)) {
			result = result.concat(flatten(item));
		}
	});
	return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	if (obj === undefined) {
		obj = {};
	}

	if(str.length === 0) {
		return obj;
	} else if (obj[str[0]]) {
		obj[str[0]]++;
	} else {
		obj[str[0]] = 1;
	}
	return letterTally(str.slice(1), obj);
};

// var letterTally = function(str, obj={}) {
// 	if (str.length === 0) {
// 		return obj;
// 	} else if (obj[str[0]]) {
// 		obj[str[0]]++;
// 	} else {
// 		obj[str[0]] = 1;
// 	}
// 	return letterTally(str.substring(1), obj);
// };

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
	var result = [];
	if (list.length === 0) {
		return result;
	} else if (list[0] !== list[1]) {
		result.push(list[0]);
	}
	return result.concat(compress(list.slice(1)));
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	var result = [];
	if (array.length === 0) {
		return result;
	} else {
		result.push(array[0].concat(aug));
		return result.concat(augmentElements(array.slice(1), aug));
	}
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	// var result = [];
	// if (array.length === 0) {
	// 	return result;
	// } else if (array[1] !== 0 || array[0] !== array[1]) {
	// 	result.push(array[0]);
	// }
	// return result.concat(minimizeZeroes(array.slice(1)));
	var result = [];
	if (array.length === 0) {
		return result;
	} else if (array[0] === 0 && array[1] === 0) {
		return result.concat(minimizeZeroes(array.slice(1)));
	} else {
		result.push(array[0]);
		return result.concat(minimizeZeroes(array.slice(1)));
	}

};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
	var result = [];
	if (array.length === 0) {
		return result;
	}
	if (array[0] < 0) {
		result.push(-array[0]);
	}
	if (array[0] >= 0) {
		result.push(array[0]);
	}
	if (array[1] && array[1] > 0) {
		result.push(-array[1]);
	}
	if (array[1] && array[1] <= 0) {
		result.push(array[1]);
	}
	return result.concat(alternateSign(array.slice(2)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	var number = {
		"1": "one",
		"2": "two",
		"3": "three",
		"4": "four",
		"5": "five",
		"6": "six",
		"7": "seven",
		"8": "eight",
		"9": "nine"
	}
	//solution for all numbers:
	// var strArr = str.split(" ");
	// var result = "";
	// if (strArr.length === 1 && number[strArr[0]]) {
	// 	return result.concat(number[strArr[0]]);
	// } else if (strArr.length === 1) {
	// 	return result.concat(strArr[0]);
	// } else if (number[strArr[0]]) {
	// 	return result.concat(number[strArr[0]], " ", numToText(strArr.slice(1).join(" ")));
	// } else {
	// 	return result.concat(strArr[0], " ", numToText(strArr.slice(1).join(" ")));
	// }
	var result = "";
	if (str.length === 0) {
		return result;
	} else if (number[str[0]]) {
		return result.concat(number[str[0]], numToText(str.slice(1)));
	} else {
		return result.concat(str[0], numToText(str.slice(1)));
	}
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
	if (!node) {
		node = document.body;
	}
	var count = 0;
	if (node.tagName.toLowerCase() === tag) {
		count++;
	}
	if (node.children.length > 0) {
		[...node.children].forEach(function(child) {
			count += tagCount(tag, child);
		})
	}
	return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
	if (!min) {
		min = 0;
	}
	if (!max) {
		max = array.length;
	}
	var mid = Math.floor((max - min) / 2) + min;
	if (mid === min && target !== array[mid]) {
		return null;
	}
	if (target === array[mid]) {
		return mid;
	} else if (target > array[mid]) {
		return binarySearch(array, target, mid, max);
	} else {
		return binarySearch(array, target, min, mid);
	}
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {

	if (array.length === 0 || array.length === 1) {
		return array;
	}
	var mid = Math.floor(array.length / 2);
	var left = array.slice(0, mid);
	var right = array.slice(mid, array.length);
	return merge(mergeSort(left), mergeSort(right));

};

var merge = function(left, right) {
	var result = [];
	if (left.length === 0 && right.length === 0) {
		return result;
	} else if (left.length === 0) {
		return result.concat(right);
	} else if (right.length === 0) {
		return result.concat(left);
	} else if (left[0] < right[0]) {
		return result.concat(left[0], merge(left.slice(1), right));
	} else if (left[0] > right[0]) {
		return result.concat(right[0], merge(left, right.slice(1)));
	}
}

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
