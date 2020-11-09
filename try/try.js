// #20 Challenges practice from freecodecamp and hackerrank

// #2 Reverse a string
// we do have a reverse method for and array but we don't have for a string, below is the reverse method for an array

var random = ["t", "o", "l", "u"];

// console.log(random.reverse());

// Now reverse a string
// Convert the string into an array first

function reverseString (str) {
    var strArr = str.split("");
    var final = strArr.reverse();
    var reversedStr = final.join("");
    // console.log(reversedStr);
}

// console.log(reverseString("hello"));

function reverseString (str) {
    let final = "";
    for (i=str.length-1; i>=0; i--) {
        final += str[i];
    }
    return final;
}
// console.log(reverseString("jalala"));

// #4 Truncate a string

// Truncate a string(first arguement) if it is longer than the given maximum string length(second arguement).
// Return the truncated string with a ...ending.
// Note that inserting the three dots to the end will add to the string length
// However, if the given maximun stirng length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determimng the truncated string.

function truncateStr (str, num) {
    if (num >= str.length);
        return str;
    if (num <= 3) {
        return str.slice(0, num-3) + "...";
    }
}
// console.log(truncateStr ("Tolu is a boy", 3));

// #5 Where do I belong

// Return the lowest index at which a value (second arguement) should be inserted into an array (first arguement) once it has been sorted. The returned value should be a number. 
// For example getIndexToIns ([1, 2, 3, 4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns ([20, 3, 5], 19) should return 2 because once the array has been sortedit will look like [3, 5, 20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns (arr, num) {
    arr.sort(function (a, b) {
        return a-b;
    });
    for (var i=0; i<arr.length; i++) {
        if (num <= arr[i]) {
            return i;
        }
    }
    for (var i=0; i<=arr.length; i++) {
        if (num <= arr.length) {
            return arr.length;
        }

    }
}
getIndexToIns ([40, 60, 5], 50);

// #6 Chunkky Monkey

// Write a function that splits an array (first argument) into groups thes length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups (arr, size) {
    var total = [];
    while (arr.length > 0) {
        total.push(arr.slice(0, size));
        arr = arr.slice(size);
    }
    return total;
}
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// #7 Sum all Numbers in a Range

// We will pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

function sumAll (arr) {
    var start = Math.min(arr[0], arr[1]);
    var finish = Math.max(arr[0], arr[1]);
    var total = 0;

    for (var i=start; i<=finish; i++) {
        total = total + i;

    }
    return total;
}
// console.log(sumAll([1, 4]));

var seeMe = 'please \'locate\' the small fhhh \"vehicle\" for me right away';
var outcome = seeMe.indexOf("vehicle");
const twe = seeMe.search('locate');
// console.log(twe);

var x = 100 / "apple";
var q = isNaN(x);
// console.log(q);

var we = ["Banana", "Mangoe", "Orange"];
// console.log(we.toString());
// console.log(we.join("/"));

// Compare function to sort an array numerically
var tryThis = [40, 70, 89, 4, 67, 32, 45, 6, 7, 6, 65];
tryThis.sort (function(a, b) {
    return (a - b);
})
// console.log(tryThis);

// Sorting an array in a random order
var teeBoy = [45, 5, 56, 67, 76, 89, 0];
teeBoy.sort (function (a, b) {
    return 0.5 - Math.random();
})
// console.log(teeBoy);

// Finding Maximum
var points = [40, 100, 1, 5, 25, 10];
function myArrayMax(arr) {
    var len = arr.length
    var max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}
// console.log(myArrayMax(points));

// Finding Minimum
var point = [40, 100, 1, 5, 25, 10];
function myArrayMin(arr) {
    var len = arr.length
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}
// console.log(myArrayMin(point));


// Sorting Object Arrays
/*var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}]
    
    displayCars();
    
    function myFunction() {
        cars.sort(function(a, b){
            var x = a.type.toLowerCase();
            var y = b.type.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        displayCars();
    }
    console.log(myFunction(cars));*/


// Array.forEach()
var txt = "";
var numbers = [4, 45, 5, 6];
numbers.forEach(newFunction);

function newFunction (value, index, array) {
    txt = txt + value + "<br>";
}
// console.log(txt);

// Array.map()

var numbers2 = [4, 7, 54, 65, 87];
var numbers3 = numbers2.map(newestFunction)

function newestFunction (value, index, array) {
    return value * 3;
}
// console.log(numbers3)

// javascript Date
var dd = new Date();
// console.log(dd);


// #8 Seek And Destroy
// You will be provided with an initial array (the first argument in the destroyer function), follwed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
          if (arr[i] === args[j]) {
            delete arr[i];
          }
        }
      }
      return arr.filter(Boolean);  
  }
//   console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//  #9
/*Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.*/

function translatePigLatin(str) {
    // Create variables to be used
    var pigLatin = "";
    var regex = /[aeiou]/gi;
  
    // Check if the first character is a vowel
    if (str[0].match(regex)) {
      pigLatin = str + "way";
    } else if (str.match(regex) === null) {
      // Check if the string contains only consonants
      pigLatin = str + "ay";
    } else {
      // Find how many consonants before the first vowel.
      var vowelIndice = str.indexOf(str.match(regex)[0]);
  
      // Take the string from the first vowel to the last char
      // then add the consonants that were previously omitted and add the ending.
      pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }
  
    return pigLatin;
  }
//   console.log(translatePigLatin("consonant"));

//   #10

/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.*/

function pairElement(str) {
    return str.split("").map(function (done) {
        if (done === "A") {
            return ["A", "T"];
        }   else if (done === "T") {
            return ["T", "A"];
        }   else if (done === "C") {
            return ["C", "G"];
        } else {
            return ["G", "C"];
        }
    });

    }
//   console.log(pairElement("GCG"));

function pairElement(str) {

    var newArr = [];
    const figure = function (strong) {
        switch (strong) {
            case "A":
                newArr.push(["A", "T"]);
                break;
            case "T":
                newArr.push(["T", "A"]);
                break;
            case "C":
                newArr.push(["C", "G"]);
                break;
            case "G":
                newArr.push(["G", "C"]);
                break;
        }
    }
    // Loop through the input
   for (var i=0; i<str.length; i++) {
       search(str[i]);
   } 
    return str;
  }
  
//   console.log(pairElement("GCG"));

// #11
// Intermediate Algorithm Scripting: Convert HTML Entities
/*Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to
their corresponding HTML entities.*/

function convertHTML(str) {
    var one = str.split(" ");
    for (var i=0; i < one.length; i++) {
        switch (one[i]) {
            case "<":
                one[i] = "&lt;";
                break;
            case "&":
                one[i] = "&amp;";
                break;
            case ">":
                one[i] = "&gt;";
                break;
            case '"':
                one[i] = "&quot;";
                break;
            case "'":
                one[i] = "&apos;";
                break;
        }
    }
    var win = one.join (" ");
    return win;
  }
//   console.log(convertHTML("Dolce & Gabbana"));

function vertHTMconL(str) {
  
    var characters = [/&/g, /</g, />/g, /\"/g, /\'/g];
    var entities = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
    
    for(var i = 0; i < characters.length; i++) {
      str = str.replace(characters[i], entities[i]);
    }
    
    return str;
  }
//   console.log(convertHTML("Dolce & Gabbana"));

// #12

// Intermediate Algorithm Scripting: Sum All Primes
/*A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast,
4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.*/
  
function sumPrimes(num) {
    function aPrime(number) {
        for (i = 2; i <= number; i++) {
            if (number % i === 0 && number != i) {
                return false;
            } else {
                return true;
            }
        }
    }
  }
  if (aPrime(number) === false) {
      return sumPrimes(num - 1);
  }
  if (aPrime === true) {
      return num + sumPrimes(num - 1);
  }
//   console.log(sumPrimes(10));

  function sumPrimes(num) {
    function isPrime(number) {
      for (let i = 2; i <= number; i++) {
        if (number % i === 0 && number != i) {
          return false;
        }
      }
      return true;
    }
    if (num === 1) {
      return 0;
    }
    if (isPrime(num) === false) {
      return sumPrimes(num - 1);
    }
  
    if (isPrime(num) === true) {
      return num + sumPrimes(num - 1);
    }
  }
//   console.log(sumPrimes(10));

let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
  }, 0);

  
