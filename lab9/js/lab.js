/**
 * Author:    Sean Osborne
 * Created:   10.31.2021
 *
 * License: Public Domain.
 **/

//Stores the div of ID 'results' into a variable
 outputEl = document.getElementById('results');

//Creates new element #1
 new1El = document.createElement("p");
 new1El.innerHTML = "What the? I'm giant now!";

//Creates new element #2
 new2El = document.createElement("p");
 new2El.innerHTML = "Hey look, I'm all blue and Papyrus-y now. Cool.";

//Appends both new elements to outputEl
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);

//Adds some style to the new elements
new1El.style.fontSize = "100px";
new2El.style.color = 'blue';
new2El.style.fontFamily = "Papyrus";
