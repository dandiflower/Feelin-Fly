$(document).ready(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAwISBzRMB9OYvEooKslnA37JQAFJbflPY",
    authDomain: "feelin-fly.firebaseapp.com",
    databaseURL: "https://feelin-fly.firebaseio.com",
    projectId: "feelin-fly",
    storageBucket: "feelin-fly.appspot.com",
    messagingSenderId: "347513284405"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //this function helps avoid CORS(Cross Origin) issues. set globally
  jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  //random prompt generator using reddit API
  var queryURL = "https://www.reddit.com/r/WritingPrompts/new.json?limit=100";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var i = Math.floor((Math.random() * 26));
    var randomPrompt = $("#reddit-prompt");
    var prompt = response.data.children[i].data.title;
    var cutPrompt = prompt.slice(4);
    randomPrompt.text(cutPrompt);
  });


  //difference between addClass and attr
  //addClass: adds additional class on top of any pre existing classes
  //attr: clears all previous classes, adds new class

  //start button on.click function
  $(document).on("click", "#start-button", function () {
    var introBox = $(".startbox");
    //getting user name and saving on Firebase
    var userName = $(".user-name").val();
    if (userName.length < 1) {
      var needName = $(".no-name");
      needName.text("Please enter your name");
    } else {
      //adding slideout to introbox
      introBox.addClass("slideout");
      //wait 2.2 seconds then bring on next box
      var timeOut = setTimeout(function () {
        introBox.addClass("hide");
        var promptbox = $(".promptbox");
        promptbox.removeClass("hide");
        promptbox.addClass("slidein");
      }, 600);
    }
  });

  //submit button on.click function
  $(document).on("click", "#submit-button", function () {
    var input = $(".response").val().split(" ").length;
    if (input < 100) {
      var needPrompt = $(".prompt-error");
      needPrompt.text("Please write at least 100 words. So far you've written " + input + " words");
    } else {
      var promptBox = $(".promptbox");
      promptBox.removeClass("slidein").addClass("class", "slideout");
      var timeOut = setTimeout(function () {
        promptBox.addClass("hide");
        var personBox = $(".personality-box");
        var matchBox = $(".match-box");
        var numberBox = $(".info-box");
        var redoBox = $(".redo-box");
        personBox.removeClass("hide").addClass("slidein");
        matchBox.removeClass("hide").addClass("slidein");
        numberBox.removeClass("hide").addClass("slidein");
        redoBox.removeClass("hide").addClass("slidein");
      }, 600)
    }
  });

//restart button
$(document).on("click", "#restart-button", function(){
  var personality = $(".personality-box").addClass("slideout");
  var country = $(".match-box").addClass("slideout");
  var info = $(".info-box").addClass("slideout");
  var redo = $(".redo-box").addClass("slideout");
  var timeOut = setTimeout(function () {
    personality.addClass("hide");
    country.addClass("hide");
    info.addClass("hide");
    redo.addClass("hide");
  $(".user-name").val(" ");
  $(".startbox").removeClass("hide").addClass("slidein");
  }, 600)
  $(".response").val(" ");
  $("#watsonResponse").empty();
  $("#countryResult").empty();
  $("#countryStuff").empty();
});

})