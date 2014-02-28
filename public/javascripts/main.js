  // ----- MAIN ----- //

  // on click, run the goDecide function
  $("#decision").click(goDecide);
  // on click new form is shown
  $("#again").click(function() {
    $(".form-container").show()
    $("#again").hide()
    // erase old values
    $("#status").text('');
    $("#score").text('');
    $("#choice1").val('');
    $("#choice2").val('');
    // hide decision text
    $("#decision-text").hide();
  });

});