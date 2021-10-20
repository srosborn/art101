/**
 * Author:    Sean Osborne
 * Created:   10.20.2021
 *
 * License: Public Domain.
 **/

 myTransport = ["bus", "on foot", "car"];

 myMainRide = {};
 myMainRide.make = "Honda";
 myMainRide.model = "Pilot";
 myMainRide.color = "Silver";
 myMainRide.year = 2005;

document.writeln("How do I get around: " + myTransport[0] + ", " + myTransport[1] + ", " + myTransport[2] + "<br>");

 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
