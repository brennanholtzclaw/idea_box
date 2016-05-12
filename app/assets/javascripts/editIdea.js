function editBody(){
  event.preventDefault();
  var ideaId = this.parentElement.getAttribute("data-idea-id")
  var ideaParams = {idea: {body: $(this).text()}}
  $.ajax({
    url: "api/v1/ideas/" + ideaId,
    method: "PUT",
    dataType: "json",
    data: ideaParams,
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
    error: function(){
      alert("Something went wrong")
    }
  })
};
