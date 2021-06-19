var container = document.querySelector(".teren");
container.addEventListener('click', move) 
  

function move(event){
  var x = event.clientX;
  var y = event.clientY;
  var ball = document.querySelector(".igrac");
  ball.style.position = "absolute";
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
  
}
var stops = document.getElementById('stop');
    stops.addEventListener('click', stop);
    function stop(event){
        container.removeEventListener('click',move);
    }