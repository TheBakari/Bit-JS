// Selecting One/Multiple Elements
// Create two unordered lists on the page.
// Create a function that selects the second list and applies a class that sets some
// background color to it.
// Create a second function that, when triggered, selects all &lt;li&gt; elements on the
// page.
// The function also sets a class that sets some bg color to every &lt;li&gt; element.
// Create one more unordered list and one more function
// The function​ should select only &lt;li&gt; elements from that last list
// Each &lt;li&gt; element should get a class that sets some bg color and transforms the
// text to uppercase.

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

// Traversing
// Create two unordered lists.
// Each list should be wrapped in a div element.
// One &lt;li&gt; element in the second list should have a class “active”, which sets its
// background color.
// Create a function that selects the &lt;li&gt; element with class “active”.
// Remove the class from that element, and then select the first &lt;li&gt; element in the
// first unordered list using node relations.
// Apply class to that newly selected &lt;li&gt; element

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


// Access/Update Text Node
// Create an unordered list containing &lt;li&gt; items that represent navigation.
// Create a function that takes text from one of the &lt;li&gt; elements and presents it on
// screen using alert.

// Create one more function.
// The function should take some text as an argument.
// The function should select the last &lt;li&gt; element in the list and replace its text with
// text passed as the function argument.

function alertText(){
    var liAlert=document.querySelector(".some-class").textContent;
    alert(liAlert)
}

function nekiText(tekst){
    var ul=document.getElementById("zamena");
    var lastChild=ul.lastElementChild;
    lastChild.textContent=tekst
}
var string="NEKI TEST TESTIRANJE "

alertText()
nekiText(string)




