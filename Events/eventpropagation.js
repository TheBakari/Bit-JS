

var slika = document.getElementById('sl')
function nesto(event) {
    if (event.target.tagName=="IMG"){
        event.target.style.border = "1px solid red";
    }

    if (event.target.clientWidth <= 300){
        event.stopPropagation();
    }
}

function kakohoces(event) {
    console.log(event.target);
}

slika.addEventListener ('click',nesto);
document.addEventListener ('click', kakohoces);