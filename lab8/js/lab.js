/**
 * Author:    Sean Osborne
 * Created:   10.27.2021
 *
 * License: Public Domain.
 **/

 function toTheThird(x) {
   //Raises the input number to the third power
   return x * x * x;
 }

 //Quick test
console.log("2 to the third power is: ", toTheThird(2));
console.log("10 to the third power is: ", toTheThird(10));
console.log("5 to the third power is: ", toTheThird(5));

randomNumbers = [33, 2, 17, 27, 14];
console.log("My array of randomly generated numbers: ", randomNumbers);

mapTest = randomNumbers.map(toTheThird);
console.log("My array, but raised to the third power: ", mapTest);

var halves = randomNumbers.map(function(x){
  //Halves each number in the array
  return x / 2;
})
console.log("My array, but now half of the original numbers: ", halves);

document.writeln("Original array of numbers: ", randomNumbers, "<br>");
document.writeln("Array of numbers raised to the third: ", mapTest, "<br>");
document.writeln("Array of numbers cut in half: ", halves);
