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

function showIdeas(results) {
  results.forEach(function(idea){
    $(".idea-quality").append(
      idea.quality
    ),
    $(".idea-title").append(
      idea.title
    ),
    $(".idea-body").append(
      idea.body
    )
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
    success: fetchIdeas,
    error: function(){
      alert("Something went wrong")
    }
  })
}

function editIdea(){
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

// function createPost(){
//   var postParams = {post: {description: $("#post-description").val()}}
//   $.ajax({
//     url: "https://birdeck.herokuapp.com/api/v1/posts.json",
//     method: "POST",
//     dataType: "json",
//     data: postParams,
//     success: successfulPosts,
//   })
// }

// photographs.forEach(function(simplePhoto) {
//   var image = document.createElement('img');
//   image.alt = simplePhoto.caption;
//   image.src = simplePhoto.url;
//   image.className = "instagram-image";
//   document.getElementById('photographs').appendChild(image)
// });
