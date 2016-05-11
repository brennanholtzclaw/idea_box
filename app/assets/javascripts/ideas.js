$(document).ready(function(){
  window.onload = fetchIdeas
  $("#create-idea").on("click", createIdea);
  $('body').on("click", "input#delete-idea", deleteIdea)
  $('body').on("click", "input#edit-idea", editIdea)
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
    "<div contentEditable='true' class='idea' data-idea-id="
    + idea.id
    + "><hr><h3>Title: "
    + idea.title
    + "</h3><p>Idea: "
    + idea.body
    + "</p><h4>Quality: "
    + idea.quality
    + "</h4>"
    + "<input type='button' value='Delete Idea' class='btn btn-danger' id='delete-idea'>  "
    + "<input type='button' value='Edit Idea' class='btn btn-primary' id='edit-idea'>"
    + "</div>"
  )
}

function showIdeas(results) {
  results.forEach(function(idea){
    $(".whole-idea").prepend(
      "<div contentEditable='true' class='idea' data-idea-id="
      + idea.id
      + "><hr><h3>Title: "
      + idea.title
      + "</h3><p>Idea: "
      + idea.body
      + "</p><h4>Quality: "
      + idea.quality
      + "</h4>"
      + "<input type='button' value='Delete Idea' class='btn btn-danger' id='delete-idea'>  "
      + "<input type='button' value='Edit Idea' class='btn btn-primary' id='edit-idea'>"
      + "</div>"
    )
  })
}

function editIdea(){
  event.preventDefault();
  var ideaId = this.parentElement.getAttribute("data-idea-id")
  var ideaParams = {idea: {title: $("#idea-title").val(), body: $("#idea-body").val()}}
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






// $(document).ready(function(){
//
//   window.onload = fetchPosts
//   $("#create-post").on("click", createPost)
//   $("button[name=button-fetch]").on("click", fetchPosts)
//   $("body").on('click', "a.delete-post", deletePost)
//   setInterval(fetchPosts, 5000)
//
// })
//
// function fetchPosts(){
//   $.getJSON( "https://birdeck.herokuapp.com/api/v1/posts.json", successfulPost
//   )
// }
// // function fetchPosts(){
// //   $.ajax({
// //     url: "https://birdeck.herokuapp.com/api/v1/posts.json",
// //     method: "GET",
// //     dataType: "json",
// //     success: successfulPost,
// //     error: function(){
// //       alert("Something went wrong")
// //     }
// //   })
// // }
//
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
//
// function deletePost(){
//   event.preventDefault();
//   // var post_id = $(this).data("post-id")
//   // var post_id = $(this).closest(".post").data("post-id")
//   var post_id = $(this).parents(".post").data("post-id")
//
//   $.ajax({
//     url: "https://birdeck.herokuapp.com/api/v1/posts/" + post_id + ".json",
//     method: "DELETE",
//     success: function(){
//       $(".post[data-post-id=" + post_id + "]").remove()
//     }
//   })
// }
//
// function updatePosts(post){
//   $("#latest-posts")
//   .append("<div class=post data-post-id="
//   + post.id
//   + "><h6>Published:"
//   + post.created_at
//   + "</h6><p>"
//   + post.description
//   + "</p><a class='delete-post' href='#'>Delete</a></div>")
// }
//
// function successfulPost(posts){
//   $("#latest-posts").html('');
//   $(posts).each(function(index, post){
//     $("#latest-posts")
//     .append("<div class=post data-post-id="
//     + post.id
//     + "><h6>Published:"
//     + post.created_at
//     + "</h6><p>"
//     + post.description
//     + "</p><a class='delete-post' href='#'>Delete</a></div>")
//   })
// }
