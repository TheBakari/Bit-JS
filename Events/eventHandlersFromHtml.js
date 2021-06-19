var button1 = document.querySelector("body");
var interval;


var containerHandler= function(){
        if(button1.classList.contains('colorblack')){
            button1.className='colorwhite'
        }else{
            button1.className='colorblack'
        }
    }

    
    

    function start() {
      interval = setInterval(containerHandler, 2000);
    }
    
    function stop() {
      clearInterval(interval);
    }
//  button1.addEventListener("click", function() {
    
//      // document.body.classList.toggle("colorblack");
   
//   }
//   );

