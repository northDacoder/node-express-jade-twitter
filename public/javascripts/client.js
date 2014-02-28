$(function () {

    // Highest number of inputs allowed
    window.highestChoice = 2;
  
    // Hide again button on load
    $("#again").hide();


    // goDecide Function Definitions
    var goDecide = function(e) {

        // Prevent default event handler on button submit
        e.preventDefault();
    
        // Erase Old Values
        $("#status").text('');
        $("#score").text('');
    
        // Hide Decision Text
        $("#decision-text").hide();
        $("#again").hide();
    
        // Display processing text & change color to black 
        $("#status").css("color", "black");
        $("#status").text("Processing ...");
    
        // Create Variable to see if any of the inputs are input
        var anyEmpty = false;
    
        // Array to hold inputs
        var choices = [];
    
        // Grab Values, add to choices array
        for(var i = 1; i <= window.highestChoice; i++) {
            var choiceValue = $("#choice"+i).val();
        
            if(choiceValue == '') {
                anyEmpty = true;
            } else {
                if(choices.indexOf(choiceValue) == -1) {
                    choices.push(choiceValue);
                }
            }
        }
    
        // Handling Some Errors
        if(!anyEmpty) {
            if($("#choice1").val() != $("#choice2").val()) {

                // Send Values to server side for processing, then wait for callback 
                $.post('/search', {'choices': JSON.stringify(choices)}, function(data) {
                    data = JSON.parse(data);
                
                    // append data to the DOM
                    $(".form-container").hide()
                    $("#status").text("and the winner is ...");
                    $("#decision-text").text(data['choice']);
                    $("#score").text('... with a score of ' + data['score'] + '');
                    $("#decision-text").fadeIn();
                    $("#score").fadeIn();
                    $("#again").show()
                });
            } else {
                // Error Code
                $("#status").css("color", "red");
                $("#status").text("Both choices are the same. Try again.");
            }
        } else {
            // Error Code
            $("#status").css("color", "red");
            $("#status").text("You must enter a value for both choices.");
        }
    }
