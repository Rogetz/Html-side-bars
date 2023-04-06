// Change the text of the button on hover
const button = document.querySelector('button');
button.addEventListener('mouseover', () => {
	button.textContent = 'Click Me';
});

button.addEventListener('mouseout', () => {
	button.textContent = 'Learn More';
});

// Make the header stick to the top of the page on scroll
const header = document.querySelector('.header');
const main = document.querySelector('.main');

