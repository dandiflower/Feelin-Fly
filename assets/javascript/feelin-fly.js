$(document).on("click", "#submit-button", function () {
  $.ajax({
      url: "https://shielded-castle-57250.herokuapp.com/suggestions",
      type: "POST",
      data: {text : $("#watsonText").val()},
      success: function(response){

       var countries = response['countries'];
       for (var i = 0; i < countries.length; i++) {
         var name = countries[i][0];
         var description = countries[i][2];
         var flag = countries[i][3];


          $("#countryResult").append($("<img class='flag'>").attr("src", flag));
          $("#countryStuff").append($("<span class='places'>").text(name + " : " + description));
          $("#countryStuff").append($("<div><br>").text('                    :                  '));
          $("#countryResult").append($("<div>").text(name));

          
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
