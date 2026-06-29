const getInTouchButton = document.querySelector('.get');
const learnMoreButtons = document.querySelectorAll('.button');
const contactSection = document.querySelector('#contact');
const form = document.querySelector('.input');
const darkModeButton = document.querySelector('.theme-toggle');

if (letstalkbutton && contactSection) {
	getInTouchButton.addEventListener('click', () => {
		contactSection.scrollIntoView({ behavior: 'smooth' });
	});
}

learnMoreButtons.forEach((button) => {
	button.addEventListener('click', () => {
		alert('currently not available.');
	});
});

if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		alert('Thanks for your message! We will contact you soon.');
		form.reset();
	});
}

if (darkModeButton) {
	darkModeButton.addEventListener('click', () => {
		document.body.classList.toggle('dark-mode');
	});
}