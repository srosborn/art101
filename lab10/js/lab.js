/**
 * Author:    Sean Osborne
 * Created:   11.3.2021
 *
 * License: Public Domain.
 **/

//Function from lab 7. Takes a string input and sorts the letters
 function myFunction(username) {
   var nameList = username.split("");
   var sortedNames = nameList.sort();
   var newserName = sortedNames.join("");
   return newserName;
 }

//Stores varibles for both the button and the html of id output
 var button = document.getElementById("my-button");
 var output = document.getElementById('output');

 function displayOutput(){
   //Stores the text inputted from the field into a variable
   var name = document.getElementById('user-name').value;

   //Runs the variable through the sorting function and changes output's html to the new name
   newName = myFunction(name);
   output.innerHTML = newName;
 }

button.addEventListener('click', displayOutput);
