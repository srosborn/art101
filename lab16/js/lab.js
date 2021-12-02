/**
 * Author:    Sean Osborne
 * Created:   12.1.2021
 *
 * License: Public Domain.
 **/

 //Calls ajax to get a random joke from an API
  function callAjax(){
    $.ajax({

        url: "https://xkcd.com/512/info.0.json",
        type: "GET",
        dataType : "json",

        success: function(data) {
          var comicObj = data;
          comicObj.title = data.title;
          comicObj.img = data.img;
          comicObj.alt = data.alt;
          var imgTag = "<h2>" + comicObj.title + "</h2><h3>" + comicObj.alt + "</h3><img src=" + comicObj.img + ">";
          $("#output").html(imgTag);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    })
  }

callAjax();
