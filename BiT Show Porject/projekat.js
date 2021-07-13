var $input;
var $second;
var movieList = [];
$(document).ready(function () {
  $input = $("#search");
  $second = $("#result");

  $input.on("keydown", function (event) {
    if (event.keyCode == 13) {
      var inputValue = $input.val();
      $input.blur();
      if (inputValue) {
        loadMovies(inputValue);
      }
    }
  });
});
function loadMovies(query) {
  var request = $.ajax({
    url: "http://api.tvmaze.com/search/shows?q=" + query,

    method: "GET",
  });

  request.done(function (response) {
    console.log(response);
    movieList = [];
    for (var i = 0; i < response.length; i++) {
      var name = response[i].show.name;
      console.log(name);

      movieList.push(response[i]);
    }
    // console.log(movieList)
    displayMovies();
  });
}
// console.log(movieList)
function displayMovies() {
  for (var i = 0; i < movieList.length; i++) {
    var $movieDiv = $("<div>");
    $movieDiv.append("<h2>" + movieList[i].show.name + "</h2>");
    var imgSource = movieList[i].show.image;
    if (imgSource) {
      $movieDiv.append("<img src=" + movieList[i].show.image.original + ">");
    } else {
      $movieDiv.append("<p>No img</p>");
    }
    $second.append($movieDiv);
  }
}
