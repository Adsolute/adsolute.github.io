
// document.addEventListener('DOMContentLoaded', findItems);





//! BURGERKING !//

console.log('1')
const iconMenu = document.querySelector('.header__menu-icon');



if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		const menuBody = document.querySelector('.menu__body');
		if (menuBody > 0) {
			console.log('3')
		}
		console.log('2');
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}
//! BURGERKING !//





//               !PODMENU!           //


const menuLinks = document.querySelectorAll('.menu__item');
const subMenus = document.querySelectorAll('.submenu')

menuLinks.forEach(item => {

	item.addEventListener('click', function () {
		console.log('1')

		subMenus.forEach(e => {
			e.classList.remove('_visible')
			console.log('1submenus each')

		});

		let subMenu = this.querySelector('.submenu');

		console.log(subMenu)

		subMenu.classList.add('_visible');

	})

});




//               !PODMENU!           //	


