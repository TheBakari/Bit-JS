// <!-- Using JS on web page

// On-page Script
// ●	Create a script tag on the page
// ●	It should contain code that console.log’s some text
// ●	Wrap the previous script in a function
// ●	When page is loaded, trigger the function

// External JS Files
// ●	Include an external JS script on the page.
// ●	The script should contain a function that uses console.log to print something.
// ●	Trigger that function.


// BOM (Window object)

//  window.navigator
// Create a function that prints out in the console the following information
// ●	the platform on which the browser is running
// ●	the information about the browser version
// ●	the company that created that browser
// Each piece of information should be printed out in a new row.

// Create new “isOnline” function that checks if the browser is online.
// It should print out “online” when the browser is online and “offline” when there is no Internet connection.


// window.screen
// Create a function that prints out the following information in the console:
// ●	current browser width and height
// ●	max possible browser height -->

// document.onload=test2()
window.onload = info();

function log(str){
    console.log(str);
}

function test1(){
    alert("blabla")
}

function task2(){
    alert("tralala");
    console.log("tralala");
}

// BOM (Window object)

//  window.navigator
// Create a function that prints out in the console the following information
// ●	the platform on which the browser is running
// ●	the information about the browser version
// ●	the company that created that browser
// Each piece of information should be printed out in a new row.
function info(){
    var infoString="";

    infoString+=window.navigator.platform+"\n";
    infoString+=window.navigator.appVersion+"\n";
    infoString+=window.navigator.vendor+"\n";

    //alert(infoString);
}

// Create new “isOnline” function that checks if the browser is online.
// It should print out “online” when the browser is online and “offline” when there is no Internet connection.

function isOnline(){
    if(navigator.onLine){
        console.log("online")
    }else{
        console.log("offline")
    }
}



// window.screen
// Create a function that prints out the following information in the console:
// ● current browser width and height
// ● max possible browser height
function getScreenDimenison(){
    console.log("Available screen dimension: "+ screen.availWidth + "x" + screen.availHeight)
    console.log("Screen dimension: " + screen.width + "X" + screen.height)
}
//getScreenDimenison();


//  window.location
// Write a function that prints out website’s url information in the console:

// ● full url address
// ● domain name
// ● used protocol
// ● parameters which are part of URL.
// Create a function for reloading the page.
// Create a function that redirects you to a website address passed to it.
// Test all three functions




 function urlData(){
     console.log("full url address: " + location.href);
     console.log("Host name: " + location.hostname);
     console.log("Used protocol: " + location.protocol);
     console.log("Request Params: " + location.search);
 }

 //urlData()



//  window.localStorage
//  Create a function that stores passed data in the browser local storage.
//  Create a function that reads the stored data, and print it out in console.
//  If there is no data, print 'There is no data'' in the console.
//  Create a function that removes data from the local storage.
//  Use the previously created functions to store/read/remove some data.
//  Then add some data in storage and close the browser.
//  Open the browser again on the same page and use the function to read the
//  stored value.
//  Modify functions to work with sessionStorage instead of localStorage.
//  Try same scenario as with localStorage to examine data livecycle.

 function reloadPage(){
     location.reload();
 }
 //reloadPage();

 function redirectPage(address){
     location.assign(address)
 }
 //redirectPage('https://www.google.com/');


//  WINDOW LOCAL AND SESSION STORAGE
//local storage
 function storage(){
    localStorage.setItem('firstname', 'Nikola')
    localStorage.getItem('firstname');
    console.log("First name is: "+ localStorage.getItem("firstname"))

    //primer2
    var firstName=localStorage.getItem("firstname")
    console.log("First name is: "+firstName)
    

    if(firstName !==""){
        console.log("First name: "+ firstName)
    }else if(firstName !==null){
        console.log("local storage is empty");
    }
}
storage ();

//SESION STORAGE
function sessionTask(){
    sessionStorage.setItem('firstname1', 'Nikola')
    sessionStorage.getItem('firstname1');
    //fje removeSessionStorage pozvana ovde
    //removeSessionStorage("firstname1");

    console.log("First1 name is: "+ sessionStorage.getItem("firstname1"))

    //primer2
    var firstName=sessionStorage.getItem("firstname1")
    console.log("First1 name is: "+firstName)
    

    if(firstName !==""){
        console.log("First name: "+ firstName)
    }else if(firstName !==null){
        console.log("local storage is empty");
    }
}
sessionTask ();

//fje Read
function read(){
    console.log(localStorage.getItem("firstname"))
    console.log(sessionStorage.getItem("firstname1"))
}
read();


 function realData(key){
     var data=localStorage.getItem(key)||"There is no data";
     console.log(data)
 }
 //realData();

 function removeSessionStorage(key){
     var remove=sessionStorage.removeItem(key)
     console.log("remove"+ remove)
 }
 //removeData();



//  WINDOW METHODS

// ● Create a function that shows the user a greeting message using alert
// ● Then a question is presented to the user using prompt
// ● When the user provides the answer, that answer is used in the confirm
// dialog
// ● The format of the message in the dialog should be: &quot;We will submit this
// answer now! &quot; + the answer
// ● If the user clicks OK, show alert with success message
// ● If the user clicks Cancel, don&#39;t show anything


function apc(){
    //ALERT
    alert("Greeting User!");
    
    //PROMPT
    var message=prompt("What is your name?");
    !confirm("We will submit this answer now! " + message) ? false : alert("Succes message");
    

}
 apc();



//  Global JavaScript Objects (homework)
// Math
// ● Random
// Create a function that builds an array of 10 random numbers between 1 and 50.
// The function prints that array out in the console and then returns it.
    function getMathRadnom(){
        var array=[];

        while(array.length<10){
            array.push(Math.floor(Math.random()* 50)+1)
        }
        console.log(array)
    }
    getMathRadnom();

// ● Round
// Create a function that uses the passed array of numbers and rounds all its
// elements to two decimals.
// Print out the modified array in the console.
// Use the first function for generating the input array.
    var arrayOne=[ 1.2312312, 55.12543263, 13.123913, 5.123123];

    function roundsArray(params){
        var rounded=params.map(function(num){
            return Math.round(num*100)/100
        })
        console.log(rounded)
    }
roundsArray(arrayOne);
// ● Floor
// Create a function that uses the passed array of numbers and rounds all its
// elements to the nearest integer.
// Print out the modified array in the console.
// Use the first function for generating the input array.
var array2=[1.87, 55.12, 13.67, 5.33, ]
function floorArray(params){
    var rounded=params.map(function(num){
        return Math.round(num)
    })
    console.log(rounded);
}
floorArray(array2);


// ● Max
// Create a function that finds and prints out the biggest element in the passed
// array of numbers.
var array3=[1,55,73,5];
function biggestElement(params){
    console.log(Math.max(...params))
}

biggestElement(array3)

// Date
// ● Print out the whole date object in the console.

// ● Print out the current time in the console.

// ● Print out the current date in the console.

var dataObject= new Date()
var fullDate= Date()
var currentTime=dataObject.toLocaleTimeString()
var currentDate=dataObject.toLocaleDateString()

console.log("Whole date object: ", fullDate)
console.log("Current time is: ",currentTime)
console.log("Current Date is: ",currentDate)

