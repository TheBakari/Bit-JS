// Intro
// Create a page that is using the jQuery library
// Print ‘Hello, world!’ in console when DOM loads

// $(document).ready(function() {
//     console.log("hi")
// })



// Selecting
// Create a page that contains navigation (ul element)
// Navigation should contain odd number of elements
// Select the first element of the list and give it a bottom border
// Select all list elements and transform their text to uppercase
// Select active element of the list and change its font color
// Find the middle one and change its background color

$(document).ready(function() {
    jQuery('.jedan').css('border-bottom', '1px solid #cc0000');
   
    $('li').addClass('dva')

    $('#poseban').click(function () {
        $('.boja').css('border', '2px solid black')
    })

    $( "li" ).filter( ":nth-child(2n)" ).css( "background-color", "red" );

})

// before() <li> prepand() text append() </li> after fje koje se pozivaju