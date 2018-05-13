// test test

//this function helps avoid CORS(Cross Origin) issues. set globally
jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

//random prompt generator using reddit API
var queryURL = "https://www.reddit.com/r/WritingPrompts/new.json?limit=100";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  var i = Math.floor((Math.random()*26));
  console.log(i);
  console.log(response.data.children[i].data.title);
});

//generates flag of country using wiki API
var country = "";
var queryURL = "https://en.wikipedia.org/w/api.php?action=query&prop=images&titles=" + country + "&format=json";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});