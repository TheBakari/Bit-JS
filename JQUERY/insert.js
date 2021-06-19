$(document).ready(function () {
    var div=$('<div>')
    $("body").prepend(div)
    $("div").before("<h1>Amazing Galerry</h1>");
    $("h1").css({
               display: "grid",
               "justify-content": "center",
             });

    var arr = ['green.jpg','green.jpg','green.jpg','green.jpg','green.jpg'];
    for (var i = 0; i<arr.length; i++) {
        var item=arr[i];

        var ele =$("<a>");
        $('div').prepend(ele)

        var aTag=$('<img>')
        aTag.attr('src',item)
        ele.html(aTag)

        aTag.css({
            'width':getRandomInt(150,350),
            'height':getRandomInt(150,350),
            "padding-right":'10px'
        })
        aTag.each(function (index,element) {
            
            if($(element).width()<200){
                $(element).css('border','10px solid green')
            }else{
                return false;
            }
        })
        
    }

    function getRandomInt(min,max) {
        return Math.floor(Math.random() * (max - min) + min );
      }
    console.log(getRandomInt(150,350))
})


// $(function () {
//     var a = [
//       '<img src="https://via.placeholder.com/150.png/09f/fff">',
//       '<img src="https://via.placeholder.com/170.png/099/fff">',
//       '<img src="https://via.placeholder.com/190.png/090/fff">',
//       '<img src="https://via.placeholder.com/300.png/09d/fff">',
//       '<img src="https://via.placeholder.com/250.png/0ff/fff">',
//       '<img src="https://via.placeholder.com/180.png/00f/fff">',
//       '<img src="https://via.placeholder.com/400.png/99f/fff">',
//     ];
//     $("body").html("<div></div>");
//     for (var i = 0; i < a.length; i++) {
//       $("div").html(a);
//     }
//     $("div").before("<h1>Amazing Galerry</h1>");
//     $("div").css({
//       display: "grid",
//       "grid-template-columns": "auto auto auto",
//      });
//      $("h1").css({
//        display: "grid",
//        "justify-content": "center",
//      });
  
//    $('img').each(function (index, element){
//     if ($(element).width()<200){
//     $(element).css('border', 'green solid 10px');
//     }
//     else if ($(element).width()>200){
//       stopPropagation();
//     }
    
//    })
    
//    });