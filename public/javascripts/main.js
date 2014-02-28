// MAIN CLIENT JavaScript
// Decision button click handler, calls goDecide() function 
$("#decision").click(goDecide);
  
// Click handler to show new form 
$("#again").click(function() {
    // Show new form 
    $(".form-container").show()
    $("#again").hide()
    
    // Erase Old Values
    $("#status").text('');
    $("#score").text('');
    $("#choice1").val('');
    $("#choice2").val('');
    
    // Hide Decision Text
    $("#decision-text").hide();
  });
});