$(document).ready(function () {

  //this function helps avoid CORS(Cross Origin) issues. set globally
  jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  //random prompt generator using reddit API
  //how to get rid of [WP] for each prompt printed
  var queryURL = "https://www.reddit.com/r/WritingPrompts/new.json?limit=100";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var i = Math.floor((Math.random() * 26));
    var randomPrompt = $("#reddit-prompt");
    randomPrompt.text(response.data.children[i].data.title);
  });

  //generates flag of country using wiki API
  var country = "";
  var queryURL = "https://en.wikipedia.org/w/api.php?action=query&prop=images&titles=" + country + "&format=json";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
  });


  //start button on.click function adds .slideout to .startbox
  $(document).on("click", "#start-button", function () {
    var introBox = $(".startbox");
    ///add time out function
    introBox.attr("class", "slideout");
    var timeOut = setTimeout(function () {
      introBox.addClass("hide");
      var promptbox = $(".promptbox");
      promptbox.removeClass("hide");
      promptbox.attr("class", "slidein");

    }, 2200);


  });

  //submit button on.click function adds .slideout to .promptbox
  $(document).on("click", "#submit-button", function () {
    var promptBox = $(".promptbox");
    promptBox.attr("class", "slideout");
    //add a few seconds before new page shows up
    document.location.href = "result.html";
  });




  //feelinFly API
  // var queryURL = "https://feelinfly.com/watson"

  // $.ajax({
  //   url: queryURL,
  //   method: "POST",
  //   data: {text: ""}
  // }).then(function(response) {
  //   console.log(response)
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
})