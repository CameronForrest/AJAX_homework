

//Inital array of sports players
var sportsPlayer = ["Michael Jordan", "Allen Iverson", "Odell Beckham", "Tracy McGrady", "P.K. Subban", "Jackie Robinson", "Lebron James"]



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
        createSearchBtn.attr("class", "players").attr("data-name", sportsPlayer[i]);
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
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var playasDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var playerImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            playerImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            playasDiv.append(p);
            playasDiv.append(playerImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gif-dumps").prepend(playasDiv);
          }
        })

})




    

