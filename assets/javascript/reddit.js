  //random prompt generator using reddit API
  //how to get rid of [WP] for each prompt printed
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