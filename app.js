const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu-nav');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
}))




const dropDownMenu = document.querySelector('.drop-down-menu');
const dropDownMenu2 = document.querySelector('.drop-down-menu2');
const dropDownArrow = document.querySelector('.fa-chevron-down');
const dropDownBtn = document.querySelector('.drop-down-btn');

dropDownBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active');
    dropDownMenu2.classList.toggle('active');
    dropDownArrow.classList.toggle('active');
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    dropDownMenu.classList.remove('active');
    dropDownMenu2.classList.remove('active');
    dropDownArrow.classList.remove('active');
}))



