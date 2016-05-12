function filterIdeas() {
  var currentName = this.value;
  var ideaTitles = $('.displayed-idea-title');
  ideaTitles.each(function(index, idea){
    if ($(idea).text().indexOf(currentName) !== -1) {
      $(idea.parentElement).show();
    } else {
      $(idea.parentElement).hide();
    }
  })
}
