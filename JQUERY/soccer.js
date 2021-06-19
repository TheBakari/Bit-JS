$(function(){
    $('.teren').on('click',move) ;
  function move(event) {
    var x = event.clientX;
    var y = event.clientY;
    $('.igrac').css({"position":"absolute",
                      "left": `${x}px`,
                      "top" : `${y}px` });
  };
  $('#stop').on('click', stop);
      function stop(event){
          $('.teren').off('click', move)
      }
  })()