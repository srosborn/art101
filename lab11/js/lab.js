/**
 * Author:    Sean Osborne
 * Created:   11.8.2021
 *
 * License: Public Domain.
 **/

//Makes jQuery variables for the Challenges, Problems, and Results divs
var challengeButton = $("#cButton");
var problemButton = $("#pButton");
var resultButton = $("#output");

//Changes the HTML in the three divs above and turns them into buttons
challengeButton.html("<button>Challenge Button</button>");
problemButton.html("<button>Problem Button</button>");
resultButton.html("<button>Result Button</button>");


$("#cButton").click(function() {
  $("#goal").toggleClass("special");
});

$("#pButton").click(function() {
  $("#goal2").toggleClass("special2");
});

$("#output").click(function() {
  $("#goal3").toggleClass("special3");
});
