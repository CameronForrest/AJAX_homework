

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

//On click events for buttons to display pictures
$(document).on("click", "#add-player", function () {

    //storing data name
        var input = $("#player-input").val().trim();
    //New button creation
        var createSearchBtn = $("<button>");
    
        createSearchBtn.text(input);
        createSearchBtn.attr("players");
        $(".buttons-view").append(createSearchBtn);
    
    });





    

