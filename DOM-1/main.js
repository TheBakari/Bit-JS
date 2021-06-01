document.addEventListener('DOMContentLoaded', function () {
    console.log(document.querySelectorAll("body ul")[1])
    var ul1= document.querySelectorAll("body ul")[1]
    //ul1.className="list-backgorund"
    ul1.setAttribute("id","secondList")
    setListElementBg(ul1)
    var ul2=document.querySelectorAll("body ul")[2]
    onMoreUl(ul2)
});            



function setListElementBg(ul){
    console.log(ul)
    var length=ul.childNodes.length;
    for(var i=0;i<length;i++){
        var li=ul.childNodes[i];
        li.className="listElement";
    }
}

function onMoreUl(ul){
    var length=ul.childNodes.length;
    
    for(var i=0;i<length;i++){
        var li=ul.childNodes[i];
        console.log(li)
        li.className="thirdList";
        var text=li.innerHTML
        console.log(li.innerHTML)
        if(text){
            li.innerHTML=text.toUpperCase()
        }
    }
}


// function traversing(){
//     var activeLi=document.querySelector('.active')
//     activeLi.removeAttribute('class');
//     var li1= document.querySelectorAll(" div ul li")[0]
//     li1.className="active";
// }

// traversing()

function changeRemoveClass () {
    var liActive = document.querySelector('.active');
    liActive.removeAttribute('class');

    
    var ulParent = liActive.parentElement; // li sa klasom active gadja svog parenta koji je ul
    var divParent = ulParent.parentElement;// ul gadja svog parenta koji je zapravo div
    var divPreviousSibling = divParent.previousElementSibling; // previousElementSibling trazi element istog naziva koji je napisan pre njega. Ako je taj isti element prvi onda ce vratiti NUll
    var ulChild = divPreviousSibling.children;// prvi div sad poziva svoju decu sto su u ovom slucaju ul
    var liChilds = ulChild[0].children[0];//gadja 0 element koji je ul i onda on gadja svoje dete preko .children[0]
    liChilds.className = "active";// dodelju klasu 
}
changeRemoveClass();