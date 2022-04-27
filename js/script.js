const menuItems = document.getElementsByClassName(".menu__link");

var onClick = function (event) {
	event.preventDefault();

	for (let i = 0; i < menuItems.length; i++) {
		menuItems[i].classList.remove('active');
	}

	event.currentTarget.classList.add('active');
};

for (let i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('click', onClick, false)
}