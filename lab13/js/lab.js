/**
 * Author:    Sean Osborne
 * Created:   11.22.2021
 *
 * License: Public Domain.
 **/

//Function that loops through 1-200 and outputs text based off if the number is a multiple
function FizzBuzz() {
  longstr = 0;

  for (var i = 1; i <= 200; i++){
    if ((i % 3 == 0) && (i % 5 == 0) && (i % 7 == 0)) {
      str = " - FizzBuzzBoom!";
    }
    else if ((i % 3 == 0) && (i % 5 == 0)) {
      str = " - FizzBuzz!";
    }
    else if ((i % 3 == 0) && (i % 7 == 0)) {
      str = " - FizzBoom!";
    }
    else if ((i % 5 == 0) && (i % 7 == 0)) {
      str = " - BuzzBoom!";;
    }
    else if(i % 7 == 0) {
      str = " - Boom!";
    }
    else if(i % 5 == 0) {
      str = " - Buzz!";
    }
    else if(i % 3 == 0) {
      str = " - Fizz!";
    }
    else {
      str = " ";
    }
    longstr = longstr + i + str + "<br>"
  }
  $("#output").html(longstr);
}

FizzBuzz();
