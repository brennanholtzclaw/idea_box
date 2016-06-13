function deleteIdea(){
  event.preventDefault();
  var ideaId = this.parentElement.getAttribute("data-idea-id");
  $.ajax({
    url: "api/v1/ideas/" + ideaId,
    method: "DELETE",
    success: function(){
      $(".idea[data-idea-id=" + ideaId + "]").remove();
    },
    error: function(){
      alert("Something went wrong");
    }
  });
}
