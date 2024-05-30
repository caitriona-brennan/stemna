document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
	
    //Get information for the form data
    var formData = new FormData(this);
    
	//Checkbox creation
	const checkbox = document.getElementById('checkbox');

	//Using If to ensure that the user clicks on the checkbox before submitting the form
	if (!checkbox.checked) {
		alert('Please, the Terms & Conditions checkbox must be checked before you submit the form!');
		return;
	}
	
	//Radio button creation
	const radio1 = document.getElementById('radio1');
	const radio2 = document.getElementById('radio2');

	//Using If to ensure that the user selects one option from the radio button before submitting the form
	if (!radio1.checked && !radio2.checked) {
		alert('Please, select an option! :)');
		return;
	}
	
	//Dropdown question creation
	const dropdown = document.getElementById('dropdown');
	
	//Using If to ensure that the user selects one option from the dropdown before submitting the form
	if (dropdown.value === '') {
		alert('Please, select an option from the dropdown so we can guarantee that your story is accurate!');
		return;
	}
	
    //Sending information to formData
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ': ' + pair[1]); 
    }

	//If all validations pass, output this alert
	alert('Form submitted successfully!');
    
    //Resetting the form after user's submission
    this.reset();
});
