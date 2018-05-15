


$(document).on("click", "#submit-button", function () {
  // console.log($("#watsonText").val());
  $.ajax({
      url: "https://shielded-castle-57250.herokuapp.com/suggestions",
      type: "POST",
      data: {text : $("#watsonText").val()},
      success: function(response){

        console.log(response);

       var countries = response['countries'];
       for (var i = 0; i < countries.length; i++) {
         var name = countries[i][0];
         var description = countries[i][2];
         var flag = countries[i][3];

          $("#countryResult").append($("<img class='flag'>").attr("src", flag));
          $("#countryStuff").append($("<span class='places'>").text(name + " : " + description));


       }
       var watson = response['watson']['personality'];
       for (var i = 0; i < watson.length; i++) {
         var trait = watson[i]['name'];
         var score = watson[i]['percentile'];

         $("#watsonResponse").append($("<div class='watson'>").text(trait + " : " + score));
       }
    }
  });
});




       // JSON.stringify(watsonData)
 



    //     console.log(response);
    //     countryCall();

      
    //   }
    // var countryCall = function() {
    //   $.ajax({
    //       url: "https://shielded-castle-57250.herohuapp.com/countries",
    //       type: "POST",
    //       data: {
    //         text: "poop"
    //       },
    //       success: function (results) {
    //         console.log(results);
    //       }

    //   });
    // }




      // var sorted = false;
      //   console.log(response.personality[4].percentile);
      // while (!sorted) {

      //   sorted = true;
      //   // Loop through the array
      //   for (var i = 0; i < 5; i++) {
      //     // If the current element is larger than the next element, swap them and set sorted to `false`
      //     if (response.personality[3].percentile < response.personality[2].percentile) {
      //       sorted = false;
      //       var temp = (response.personality[i]);
      //       (response.personality[i]) = (response.personality[i + 1]);
      //       (response.personality[i + 1]) = temp;
      //     }
            // console.log(response.personality[i].percentile);
            // console.log(response.personality[i].name);
      //   }

      // }
      // If we looped through the array without having to swap anything, exit the while loop and return the array
  

    
  // }
  // });

  // //feelinFly API
  // var queryURL = "https://feelinfly.com/countries"

  // $.ajax({
  //   url: queryURL,
  //   method: "POST",
  //   data: {text: ""}
  // }).then(function(response) {
  //   console.log(response)
  // });

// });

  