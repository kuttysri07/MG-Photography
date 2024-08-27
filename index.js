const navCheckbox = document.getElementById('click');
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navCheckbox.checked = false; // Uncheck the checkbox to close the menu
  });
});

// portfolio

var elem = document.querySelector('.m-p-g');

	document.addEventListener('DOMContentLoaded', function() {
		var gallery = new MaterialPhotoGallery(elem);
	});