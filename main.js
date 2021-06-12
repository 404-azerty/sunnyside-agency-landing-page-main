const menu = document.querySelector('.toggle-menu')
const menuButton = document.querySelector('.toggle-icon')
const menuItems = document.querySelectorAll('.toggle-menu li a')

menuItems.forEach(menuItem => menuItem.addEventListener('click', toggleMenu));
menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('hidden')
}
