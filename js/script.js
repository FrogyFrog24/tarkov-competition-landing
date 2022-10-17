{
	"use strict"
	const secretAwardsList = document.querySelector('.secret-award-content');
	const secretAwardsTrigger = document.querySelector('.secret-award__title');
	secretAwardsTrigger.addEventListener('click', e => {
		secretAwardsList.classList.toggle('active')
	})
}
"use strict"
const popup = document.querySelector('.sign-up-wrapper');
const openPopup = () => {
	popup.classList.add('active');
}

window.addEventListener('click', e => {
	if (e.target.classList[0] === 'sign-up-wrapper') {
		popup.classList.remove('active');
	}
})