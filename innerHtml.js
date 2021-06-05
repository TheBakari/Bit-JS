// InnerHTML
// Do the following exercise in two ways: using DOM manipulation methods and
// using innerHTML.
// Create a function that is used for building a dropdown/select element.
// It first builds a dropdown and then adds it to the DOM.
// The function takes two arguments: the first is an array of strings and the second
// is a DOM node to which the dropdown will be added.
// Create options that correspond to items in the passed array and add them to the
// select element.
// Add the whole dropdown list to DOM .
// Use this function to create two selects on the page.
// The first select should be appended to the first div on the page.
// The second select should be appended to the last div on the page.

var div=document.querySelectorAll("div");
var firstDiv=div[0];
var lastDiv = div[div.length - 1];

function addNode(product,node){
    var productId=1;
    var select=""

    select+="<select name='selectBikes' id='selectBikes'";
    select+="<option value=0>--Choose you favorite Motorcycle--</option>";
    product.forEach(function(element){
        select+="<option value=' "+(productId++)+"'>"+element+"</option>";
    })
    select+="</select>";
    return node.innerHTML=select;
}

var bikes=["Yamaha","Ducati","Kawaski","Honda","Benneli"];
var models=["R1","Pinegale","Z750","cbr1000rr","trx502x"];

addNode(bikes,firstDiv);
addNode(models,lastDiv);