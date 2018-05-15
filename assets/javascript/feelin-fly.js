  //feelinFly API
  // var queryURL = "https://feelinfly.com/watson"

  // $.ajax({
  //   url: queryURL,
  //   method: "POST",
  //   data: {text: ""}
  // }).then(function(response) {
  //   console.log(response)
  // });


$(document).on("click", "#submit-button", function () {
  // console.log($("#watsonText").val());
  $.ajax({
      url: "https://shielded-castle-57250.herokuapp.com/watson",
      type: "POST",
      data: {text : $("#watsonText").val()},
      success: function(response){
        console.log(response);
      
      var sorted = false;
        console.log(response.personality[4].percentile);
      while (!sorted) {

        sorted = true;
        // Loop through the array
        for (var i = 0; i < 5; i++) {
          // If the current element is larger than the next element, swap them and set sorted to `false`
          if (response.personality[3].percentile < response.personality[2].percentile) {
            sorted = false;
            var temp = (response.personality[i]);
            (response.personality[i]) = (response.personality[i + 1]);
            (response.personality[i + 1]) = temp;
          }
            // console.log(response.personality[i].percentile);
            // console.log(response.personality[i].name);
        }

      }
      // If we looped through the array without having to swap anything, exit the while loop and return the array
  

    
  }
  });

  // //feelinFly API
  // var queryURL = "https://feelinfly.com/countries"

  // $.ajax({
  //   url: queryURL,
  //   method: "POST",
  //   data: {text: ""}
  // }).then(function(response) {
  //   console.log(response)
  // });

});

  