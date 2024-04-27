import './main.scss';

let notifyForm = document.forms.notifyForm;
let emailInput = notifyForm[0];
let submitButton = notifyForm[1];
let emailError = document.querySelector('.pingLaunch__form-email-error');
submitButton.addEventListener('click', (e) => {
	if (!emailInput.checkValidity()) {
		e.preventDefault();
		emailError.style = 'display: block';
	}
});
