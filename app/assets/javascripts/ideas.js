$(document).ready(function(){
  window.onload = fetchIdeas
  $("#create-idea").on("click", createIdea);
})

function fetchIdeas(event) {
  $.ajax({
    url: "api/v1/ideas",
    method: "GET",
    dataType: "json",
    success: showIdeas,
    error: function(){
      alert("Something went wrong")
    }
  })
}

function createIdea() {
  var ideaParams = {idea: {title: $("#idea-title").val(), body: $("#idea-body").val()}}
  // var ideaParams = {idea: {title: $("#idea-title")}.val(), body: $("#idea-body").val()}}
  $.ajax({
    url: "api/v1/ideas",
    method: "POST",
    dataType: "json",
    data: ideaParams,
    success: prependIdea,
    error: function(){
      alert("Something went wrong")
    }
  })
}

function prependIdea(idea) {
  event.preventDefault();
  $(".whole-idea").prepend(
    "<div class='idea' data-idea-id="
    + idea.id
    + "><h3>Title:"
    + idea.title
    + "</h3><p>"
    + idea.body
    + "</p><h4>"
    + idea.quality
    + "</h4>"
    + "</div>"
  )
}

function editIdea(){
  event.preventDefault();
  var ideaParams = {idea: {title: $("#idea-title").val(), body: $("#idea-body").val()}}
  $.ajax({
    url: "api/v1/ideas",
    method: "PUT",
    dataType: "json",
    data: ideaParams,
    success: fetchIdeas,
    error: function(){
      alert("Something went wrong")
    }
  })
}

function showIdeas(results) {
  results.forEach(function(idea){
    $(".whole-idea").prepend(
      "<div class='idea' data-idea-id="
      + idea.id
      + "><h3>Title:"
      + idea.title
      + "</h3><p>"
      + idea.body
      + "</p><h4>"
      + idea.quality
      + "</h4>"
      + "</div>"
    )
  })
}
