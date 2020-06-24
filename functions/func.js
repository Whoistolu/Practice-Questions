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

function maleUser ("fred", 25) {
    let info = `The name of the user is ${fred} and their age is ${25}`;

}