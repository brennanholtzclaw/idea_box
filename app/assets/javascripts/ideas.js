$(document).ready(function(){
  var $body = $('body');
  window.onload = fetchIdeas;
  $("#create-idea").on("click", createIdea);
  $("#idea_filter_name").on("keyup", filterIdeas);
  $body.on("click", "input#delete-idea", deleteIdea);
  $body.on("click", "input#thumbs-up", thumbsUp);
  $body.on("click", "input#thumbs-down", thumbsDown);
  $body.on("blur", "h3.displayed-idea-title", editTitle);
  $body.on("blur", "p.displayed-idea-body", editBody);
});

function fetchIdeas(event) {
  $.ajax({
    url: "api/v1/ideas",
    method: "GET",
    dataType: "json",
    success: showIdeas,
    error: function(){
      alert("Something went wrong");
    }
  });
}

function showIdeas(results) {
  var $wholeIdea = $('.whole-idea');
  $wholeIdea.html("");
  results.forEach(function(idea){
    $wholeIdea.prepend(ideaDiv(idea));
  });
}

function prependIdea(idea) {
  $wholeIdea.prepend(ideaDiv(idea));
}

function ideaDiv(idea) {
  return "<div class='idea' data-idea-id=" +
  idea.id +
  " data-quality='" +
  idea.quality +
  "'><hr><h3 class='displayed-idea-title idea' id='idea-title-" +
  idea.id +
  "' contentEditable='true'>" +
  truncate(idea.title) +
  "</h3><p class='displayed-idea-body id='idea-body-" +
  idea.id +
  "' contentEditable='true'>" +
  truncate(idea.body) +
  "</p><h4>Quality: " +
  idea.quality +
  "</h4>" +
  "<input type='button' value='Delete Idea' class='btn btn-danger' id='delete-idea'>  " +
  "<input type='button' value='Thumbs Up' class='btn btn-success' id='thumbs-up'>  " +
  "<input type='button' value='Thumbs Down' class='btn btn-warning' id='thumbs-down'>  " +
  "</div>";
}

var truncate = function(ideaText) {
  return ideaText.length > 100 ? ideaText.substr(0, ideaText.lastIndexOf(' ', 100)) + '...' : ideaText;
};
