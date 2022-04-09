let mainList = document.querySelector('header .new');
let mainIcon = document.querySelector('header .icon')

mainIcon.onclick = function () {
	mainList.classList.toggle('open')
}
window.onscroll = function () {
	mainList.classList.remove('open')
}
