// Define and code 5 of the 9 functions below.

// Define the functions using the approach as specified (either as a function expression or declaration).

// Be sure to number each function with a comment above it.

// After each function, call it at least once and console.log the results.

// For example, here's the first function, our gift to you:

// // 1.
// function maxOfTwoNumbers(x, y) {
//   if (x >= y) {
//     return x;
//   } else {
//     return y;
//   }

//   // or more "elegantly" using the fantastic ternary expression!
//   // return  x >= y ? x : y;
// }

// console.log(maxOfTwoNumbers(3, 9));

// // 2.
// ...
// Here are the functions:

// (completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.


// Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

function maxOfThree (a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
//console.log(maxOfThree(72,98,90))


// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

let isCharAVowel = function (x) {
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
        return true
    } else return false
}
// console.log(isCharAVowel('w'))
// console.log(isCharAVowel('u'))



// Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

function sumArray (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum+= arr[i]
    }
    return sum
}
//console.log(sumArray([2,4,5]))




// Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

let multiplyArray = function (array) {
    let product = 1
    for (let i = 0; i < array.length; i++){
        product*= array[i]
    }
    return product
}
//console.log(multiplyArray([2,4,5]))





// Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

function numArgs(x) {
    return arguments.length
}
//console.log(numArgs(2,7,9,'hello', true))





// Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

let reverseString = function (str) {
    let reverseStr = ''
    for (let i = str.length-1; i >= 0; i--){
        reverseStr += str[i]
    }
    return reverseStr
}
//console.log(reverseString('rockstar'))


// Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

function longestStringInArray (arrStrings) {
    let longestLengthWord = ''
    for (let i = 0; i < arrStrings.length; i++){
        if (arrStrings[i].length > longestLengthWord.length) {
            longestLengthWord = arrStrings[i]
        }
    }
    return longestLengthWord
}
//console.log(longestStringInArray(['a','bb','ccc','dddddd']))



// Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

const stringsLongerThan = function (arrayOfStr, num) {
    let arrStringsLonger = []
    for (let i = 0; i < arrayOfStr.length; i++){
        if (arrayOfStr[i].length > num) {
            arrStringsLonger.push(arrayOfStr[i])
        }
    }
    return arrStringsLonger
}
//console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))
//console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning', 'absolutely', 'please', 'no', 'yes'], 3))












