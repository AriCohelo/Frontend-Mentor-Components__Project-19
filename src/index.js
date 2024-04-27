import './main.scss';

let notifyForm = document.forms.notifyForm;
let emailInput = notifyForm[0];
let submitButton = notifyForm[1];
let emailError = document.querySelector('.pingLaunch__form-email-error');
let iconContainer = document.querySelectorAll('.iconContainer-active');

submitButton.addEventListener('click', (e) => {
	if (!emailInput.checkValidity()) {
		e.preventDefault();
		emailError.style = 'display: block';
	}
});

iconContainer.forEach((container) => {
	container.addEventListener('mouseover', () => {
		container.style.backgroundColor = 'hsl(223, 87%, 63%)';
		const svgIcon = container.querySelector('.svgIcon-active');
		svgIcon.style.fill = 'white';
	});
	container.addEventListener('mouseout', () => {
		container.style.backgroundColor = 'white';
		const svgIcon = container.querySelector('.svgIcon-active');
		svgIcon.style.fill = 'hsl(223, 87%, 63%)';
	});
});
