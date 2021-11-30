/**
 * Author:    Sean Osborne
 * Created:   11.29.2021
 *
 * License: Public Domain.
 **/

//Calls ajax to get a random joke from an API
 function callAjax(){
   $.ajax({

       url: "https://v2.jokeapi.dev/joke/Miscellaneous",
       type: "GET",
       dataType : "json",

       success: function(data) {
         $("#output").html(data.setup)
         $("#punchline").html(data.delivery)
       },
       error: function (jqXHR, textStatus, errorThrown) {
           console.log("Error:", textStatus, errorThrown);
       }
   })
 }

$("#activate").click(callAjax);
