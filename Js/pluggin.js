/* Global Rules */


/* Calculate Textarea Characters */
var mySpan        	= document.getElementById('myspan'),
    myTextArea    	= document.getElementById('text'),
    myPrevArea    	= document.getElementById('preview'),
    maxLength 		= myTextArea.getAttribute('maxlength');

//mySpan.textContent = localStorage.getItem('spanValue');

myTextArea.oninput = function () {

	'use strict';

	mySpan.textContent = maxLength - this.value.length;

	// Add Data To Local Storage
	//localStorage.setItem('spanValue', mySpan.textContent);

}

window.onload = function () {

	'use strict';

	// Clear Textarea Onload
	myTextArea.value = '';

}

// Make The Preview Area Readonly
myPrevArea.readOnly = true;

//console.log(localStorage.getItem('spanValue'));


/* Edit Text Live On Text */
function addLivePreview(inputElement, previewElement) {

	'use strict';

	inputElement.addEventListener('input', function (event) {

		previewElement.textContent = event.target.value;

	});
}

addLivePreview(myTextArea, myPrevArea);


/* Type Writer Effect On Text */
var myP 	= document.getElementById('editor'),
	myText 	= myP.getAttribute('data-type'),
	i = 0;

// Define SetInterval()
var textWriter = setInterval(() => {

	myP.textContent += myText[i];

	i++; // i = i + 1  // i += 1  //They All The Same

	// Clear SetInterval() On Condition
	if (i > myText.length -  1) {
		clearInterval(textWriter);
	}

}, 100);

/* Capitalize Words Function */
function capitalizeWords(myText) {

	return myText.replace(/\b\w/g, function(l) {

		 return l.toUpperCase() 

		});
	
}

var capitalizedStr = capitalizeWords(myText);
myText = capitalizedStr;