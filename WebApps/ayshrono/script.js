$(document).ready(function(){
    const requestUrl="https://api.chucknorris.io/jokes/random"
    const $button=$("#button")
    const $divNesto=$("#divNesto")
    let body=$("body");

    $button.on('click',function(){
        
        fetch(requestUrl).then(function(response){
            console.log(response)
            return response.json()
            
         })
      
        let joke=fetch(requestUrl).then(function(response){
            return response.json();
        }).then(function(data){
            $divNesto.html(data.value);
            return data

        })
    })

})





