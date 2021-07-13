var $input = $("#input");
var $name = $("#singleMovieName");
var $aka = $("#aka");
var $imgRes = $('#imgResponse');
var $seasonsNumber = $('#seasonNumber');
var $seasonsList = $('#seasonsList');
var $castList = $('#castList');
var $summary = $('#summary');
$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("name");
  console.log(myParam);
  getShow(myParam);
  
  $input.on("keydown", function (event) {
    
      
      handleError.text("");
      if (inputValue) {
        function search(inputVal) {
          var request = $.ajax({
            url: "http://api.tvmaze.com/search/shows?q=" + inputVal,
            method: "GET",
          });
          request.done(function (response) {
            list = [];
            $srcResult.html("");
            response.forEach(function (element) {
              console.log(element);
              list.push(element);
            });
            console.log(list.length)
            showOnPage();
          });
        }
        function showOnPage() {
          list.forEach(function (element, i) {
            var div = $("<div class = col-4>");
            // div.append("<img src=" + list[i].show.image.original + ">");
            var imgSource = list[i].show.image;
            if (imgSource) {
              div.append("<img src=" + list[i].show.image.original + ">");
            } else {
              div.append("<p>No img</p>");
            }
            div.append("<p class = 'text-primary'>" + list[i].show.name + "</p>")
            // div.append("<a href = list[i].show.url target = _blank>" + list[i].show.name + "</a>" )
            div.on("click", function () {
              console.log(list[i].show.url);
              window.location;
              console.log(window.location.href);
              window.location.href = "pageInfoMovie.html?name=" + list[i].show.name;
            });
            $srcResult.append(div);
          });
        }
        
      } else {
        handleError.text("Error!");
      }
      $input.val('')
    
  });
  
});


function getShow(showName) {
  var request = $.ajax({
    url: "http://api.tvmaze.com/singlesearch/shows?q=" + showName,
    method: "GET",
  });
  request.done(function (response) {
    $name.text(response.name)
    $imgRes.html('<img  class="imgResponse" src="' + response.image.original + '">')
    $summary.html(response.summary)
    function getSeasons(){
      var request = $.ajax({
        url: "http://api.tvmaze.com/shows/" + response.id + "/seasons",
        method: 'GET',
      });
      request.done(function(response){
        $seasonsNumber.text('Sesons' + '(' + response.length + ')');
        response.forEach(function (element){
          var li = $('<li>' + element.premiereDate + ' - ' + element.endDate + '</li>');
          if (element.premiereDate == null){
            return;
          }
          $seasonsList.append(li);
        });
      })
    }
    function getAka (){
      var request = $.ajax({
        url: "http://api.tvmaze.com/shows/" + response.id + "/akas",
        method: "GET",
      });
      request.done(function(response){
        response.forEach(function(element){
          var aka = element.country.name + ": " + element.name + "<br>";
          $aka.append(aka)
          
        })
        
        
      })
    }
    function getCast (){
      var request = $.ajax({
        url: "http://api.tvmaze.com/shows/" + response.id + "/cast",
        method: "GET",
      });
      request.done (function(response){
        var count = 9;
        if (count>response.length){
          count=response.length;
        }
        console.log(response)
       
        for (var i=0; i<count; i++){
          var li = $('<li>' + response[i].person.name + '</li>');  
          
          console.log(count)       
         $castList.append(li);
       }
      })
    }
    getCast()
    getSeasons()
    getAka()
  });
}
