const getInTouchButton = document.querySelector('.get');
const learnMoreButtons = document.querySelectorAll('.button');
const contactSection = document.querySelector('#contact');
const form = document.querySelector('.input');

if (getInTouchButton && contactSection) {
	getInTouchButton.addEventListener('click', () => {
		contactSection.scrollIntoView({ behavior: 'smooth' });
	});
}

learnMoreButtons.forEach((button) => {
	button.addEventListener('click', () => {
		alert('This is a beginner-friendly JS demo button.');
	});
});

if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		alert('Thanks for your message! We will contact you soon.');
		form.reset();
	});
}
