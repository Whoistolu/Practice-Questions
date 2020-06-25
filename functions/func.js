// Create a function that takes in 2 arguments which are numbers. If the first
// argument is greater than the 2nd, it should return a string 'First number is greater
// than second number'. Else if the second argument is greater than the 1st, it
// should return a string 'Second number is greater than the first number'. Else it
// should return a string 'The numbers are the same'

function myFunction (firsArguement, secondArguement) {
    if (firsArguement > secondArguement) {
        return 'First Number is greater than second number';
    } else {
        return 'Second Number is greater than first number';
    }
}
console.log(myFunction(800, 450));
console.log(myFunction(230, 920));


// Create a function that takes in 2 arguments.
// The first argument is the name and 2nd argument is the age. This function
// should return a string that interpolates the 2 arguments in such a way 'The name
// of the user is _ and their age is __'

function maleUser (userName, userAge) {
    const name = fred;
    const age = 25;
    return `The name of the user is ${userName} and he is ${userAge} years of age`;
}
console.log(maleUser);

// Create a function that takes in 1 argument which is a string. If the string length is
// greater than or equal to 5, return the string 'This word is long'. If the string length
// is lesser than 5, return the string 'This word is short'

function cars (vehicle) {
    if (vehicle.length >= 5) {
        return 'This word is long';
    } else if (vehicle.length < 5) {
        return 'This word is short';
    }
}
console.log(cars('corola'));
console.log(cars('kia'));