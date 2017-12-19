
var form = document.getElementById('contact-form');
var thankyou = document.getElementById('thankyou-message');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	form.classList.add('hide');
	thankyou.classList.remove('hide');

}.bind(this));
