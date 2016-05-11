$(document).ready(function(){
  window.onload = fetchIdeas
  $("#create-idea").on("click", createIdea);
  $('body').on("click", "input#delete-idea", deleteIdea);
  $('body').on("blur", "h3.displayed-idea-title", editTitle);
  $('body').on("blur", "p.displayed-idea-body", editBody);
var $ideaTitles = $('.idea-title');
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
  // event.preventDefault();
  $(".whole-idea").prepend(
    "<div class='idea' data-idea-id="
    + idea.id
    + "><hr><h3 class='displayed-idea-title' id='idea-title-"
    + idea.id
    +"' contentEditable='true'>"
    + idea.title
    + "</h3><p class='displayed-idea-body id='idea-body-"
    + idea.id
    + "' contentEditable='true'>"
    + idea.body
    + "</p><h4>Quality: "
    + idea.quality
    + "</h4>"
    + "<input type='button' value='Delete Idea' class='btn btn-danger' id='delete-idea'>  "
    + "</div>"
  )
}

function showIdeas(results) {
  results.forEach(function(idea){
    $(".whole-idea").prepend(
      "<div class='idea' data-idea-id="
      + idea.id
      + "><hr><h3 class='displayed-idea-title' id='idea-title-"
      + idea.id
      +"' contentEditable='true'>"
      + idea.title
      + "</h3><p class='displayed-idea-body id='idea-body-"
      + idea.id
      + "' contentEditable='true'>"
      + idea.body
      + "</p><h4>Quality: "
      + idea.quality
      + "</h4>"
      + "<input type='button' value='Delete Idea' class='btn btn-danger' id='delete-idea'>  "
      + "</div>"
    )
  })
}

function editBody(){
  event.preventDefault();
  var ideaId = this.parentElement.getAttribute("data-idea-id")
  var ideaParams = {idea: {body: $(this).text()}}
  $.ajax({
    url: "api/v1/ideas/" + ideaId,
    method: "PUT",
    dataType: "json",
    data: ideaParams,
    success: fetchIdeas,
    error: function(){
      alert("Something went wrong")
    }
  })
};

function editTitle(){
  event.preventDefault();
  var ideaId = this.parentElement.getAttribute("data-idea-id")
  var ideaParams = {idea: {title: $(this).text()}}
  $.ajax({
    url: "api/v1/ideas/" + ideaId,
    method: "PUT",
    dataType: "json",
    data: ideaParams,
    success: fetchIdeas,
    error: function(){
      alert("Something went wrong")
    }
  })
};

function deleteIdea(){
  event.preventDefault();
  var ideaId = this.parentElement.getAttribute("data-idea-id")
  $.ajax({
    url: "api/v1/ideas/" + ideaId,
    method: "DELETE",
    success: function(){
      $(".idea[data-idea-id=" + ideaId + "]").remove()
    },
    error: function(){
      alert("Something went wrong")
    }
  })
};
