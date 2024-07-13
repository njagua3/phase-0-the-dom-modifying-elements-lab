
// Remove the <main> element with id 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element and assign it to the 'newHeader' variable
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the text content of the new <h1> element
newHeader.innerHTML = 'YOUR-NAME is the champion';

// Add the new <h1> element to the DOM (for the purpose of the test, you could append it to the body or any other container)
document.body.appendChild(newHeader);
