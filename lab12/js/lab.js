/**
 * Author:    Sean Osborne
 * Created:   11.15.2021
 *
 * License: Public Domain.
 **/

//Function that takes a string and sorts it based on its length
function sortingHat(str) {
  //Get the length of the string and the remainder when it's divided by 4
  len = str.length;
  mod = len % 4;

  //Returns one of four houses depending on the value of the remainder
  if (mod == 0){
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else {
    return "Hufflepuff"
  }
}

theButton = document.getElementById('button');
theButton.addEventListener("click", function(){
  name = document.getElementById('input').value;
  house = sortingHat(name);
  newPara = "<p>The house has decided. Your new house will be " + house + "</p>";
  document.getElementById('output').innerHTML = newPara;
})
