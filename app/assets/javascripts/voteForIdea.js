function thumbsUp() {
  event.preventDefault();
  var ideaId = this.parentElement.getAttribute("data-idea-id")
  if ($(this.parentElement).data("quality") === "terrible") {
    var ideaParams = {idea: {quality: "plausible"}}
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
  }
  else if ($(this.parentElement).data("quality") === "plausible") {
    var ideaParams = {idea: {quality: "great"}}
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
  }
};

function thumbsDown() {
  event.preventDefault();
  var ideaId = this.parentElement.getAttribute("data-idea-id")
  if ($(this.parentElement).data("quality") === "great") {
    var ideaParams = {idea: {quality: "plausible"}}
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
  }
  else if ($(this.parentElement).data("quality") === "plausible") {
    var ideaParams = {idea: {quality: "terrible"}}
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
  }
};
