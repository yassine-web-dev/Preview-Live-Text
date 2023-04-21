/* Global Rules */


/* Calculate Textarea Characters */
var mySpan        = document.getElementById('myspan'),
    myTextArea    = document.getElementById('text'),
    myPrevArea    = document.getElementById('preview'),
    desirableNum  = 100;

// Calculate Text Area
myTextArea.onkeyup = function () {

	'use strict';

	mySpan.textContent = desirableNum - this.value.length;

}

myTextArea.addEventListener("input", function() {

  if (myTextArea.value.length > desirableNum) {

    myTextArea.value = myTextArea.value.substring(0, desirableNum);

  }
  
});

// Let Span keeps The Calculated Value
window.onload = function () {

	'use strict';

	mySpan.textContent   = desirableNum - myTextArea.value.length;

}

// Make The Preview Area Readonly
myPrevArea.readOnly = true;

/* Edit Text Live On Text */
function addLivePreview(inputElement, previewElement) {

	'use strict';

	inputElement.addEventListener('keyup', function (event) {

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