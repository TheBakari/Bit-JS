// Attributes
// Create a form that contains multiple input elements with labels.
// Some of those elements should be required.
// Create a function that validates the form.
// The function checks each input element that belongs to the form.
// If the element has the required attribute and no data, it should get red borders.

var form = document.querySelectorAll("form input");

function validateRequired(form) {
  form.forEach(function (element) {
      if(element.hasAttribute("required") && element.value == "") {
        element.className = "red-border";
      }  
  });
}

validateRequired(form);