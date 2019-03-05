

//Inital array of sports players
var sportsPlayer = ["Michael Jordan", "Allen Iverson", "Odell Beckham", "Tracy McGrady", "P.K. Subban", "Jackie Robinson", "Lebron James"]

var stillStop;
var animatedPlay;

//Generate buttons for players in the array
    for (var i = 0; i < sportsPlayer.length; i++) {

//Generate buttons for players in the array
    var newButton = $("<button>");
//creates button class
    newButton.addClass("players");
//adding a data-attr
    newButton.attr("data-name", sportsPlayer[i]);
//inital button text
    newButton.text(sportsPlayer[i]);
//adds button to html
    $(".buttons-view").append(newButton);
    }

//On click events for buttons to add new buttons
$(document).on("click", "#add-player", function () {
    
    
    
    

    //storing data name
       sportsPlayer.push($("#player-input").val().trim());
    //New button creation
        var createSearchBtn = $("<button>");
    
        for (var i = 0; i < sportsPlayer.length; i++) {

        createSearchBtn.text(sportsPlayer[i]);
        createSearchBtn.attr({"class": "players", "data-name": sportsPlayer[i]});
        $(".buttons-view").append(createSearchBtn);
        }

        $("#player-input").val("");
    });

//function that Drops gifs onto page
$(document).on("click", ".players", function () {
    $("#gif-dumps").empty();
    
// Grabbing and storing the data-animal property value from the button
    var playaNames = $(this).attr("data-name");
    console.log(playaNames);

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      playaNames + "&api_key=dc6zaTOxFJmzC&limit=10";


      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function(response) {
          console.log(queryURL);

          console.log(response);

          var results = response.data;

          // Looping through each result item
          for (var j = 0; j < results.length; j++) {

            // Creating and storing a div tag
            var playasDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var pTag = $("<p>").text("Rating: " + results[j].rating);
            
            //calling still and animated variables to assign them a image type
            stillStop = results[j].images.original_still.url;
            animatedPlay = results[j].images.original.url;
            


           // Setting the data name and src attribute of the image to a property pulled off the result item
            var playerImage = $("<img>").attr({"data-status": "stopped", "src": stillStop,
             "data-animate": animatedPlay, 
             "data-stop": stillStop});;
           

            // Appending the paragraph and image tag to the playasDiv
            playasDiv.append(pTag);
            playasDiv.append(playerImage);

            // Prependng the playasDiv to the HTML page in the "#gifs-dumps" div
            $("#gif-dumps").prepend(playasDiv);  
          }
            
        })

})

//On click event for images so that they will animate
$(document).on("click", "img", function(){
    var state = $(this).attr("data-status");
    if (state === "stopped") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-status", "animated");
    } else {
      $(this).attr("src", $(this).attr("data-stop"));
      $(this).attr("data-status", "stopped");
    }

});


    

