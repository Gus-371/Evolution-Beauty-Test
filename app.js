

//hamburger menu for phone
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



//drop down menu for services
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





//gallery viewer modal


//get modal element
var modal = document.getElementById('modal-gallery');

//get open modal button
var openBtn1 = document.querySelector('.btn-open-gallery1');
var openBtn2 = document.querySelector('.btn-open-gallery2');
var openBtn3 = document.querySelector('.btn-open-gallery3');
var openBtn4 = document.querySelector('.btn-open-gallery4');
var openBtn5 = document.querySelector('.btn-open-gallery5');
var openBtn6 = document.querySelector('.btn-open-gallery6');
var openBtn7 = document.querySelector('.btn-open-gallery7');
var openBtn8 = document.querySelector('.btn-open-gallery8');
var openBtn9 = document.querySelector('.btn-open-gallery9');
var openBtn10 = document.querySelector('.btn-open-gallery10');
var openBtn11 = document.querySelector('.btn-open-gallery11');
var openBtn12 = document.querySelector('.btn-open-gallery12');


//get close button
var closeBtn = document.getElementById('close-btn-gallery');

//listen for open click
openBtn1.addEventListener('click', openModal);
openBtn2.addEventListener('click', openModal);
openBtn3.addEventListener('click', openModal);
openBtn4.addEventListener('click', openModal);
openBtn5.addEventListener('click', openModal);
openBtn6.addEventListener('click', openModal);
openBtn7.addEventListener('click', openModal);
openBtn8.addEventListener('click', openModal);
openBtn9.addEventListener('click', openModal);
openBtn10.addEventListener('click', openModal);
openBtn11.addEventListener('click', openModal);
openBtn12.addEventListener('click', openModal);


//listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outside click
window.addEventListener('click', outsideClick);


//function to open modal
function openModal(){
    modal.style.display = 'block';
}


//function to close modal
function closeModal(){
    modal.style.display = 'none';
}


//function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}





//gallery change image on click

var imageIndex = 1
var image = document.getElementById('image-replace')
openBtn1.addEventListener('click', () => {
    image.src="Images/1.png"
    imageIndex = 1
})

var image = document.getElementById('image-replace')
openBtn2.addEventListener('click', () => {
    image.src="Images/2.png"
    imageIndex = 2
})

var image = document.getElementById('image-replace')
openBtn3.addEventListener('click', () => {
    image.src="Images/3.png"
    imageIndex = 3
})

var image = document.getElementById('image-replace')
openBtn4.addEventListener('click', () => {
    image.src="Images/4.png"
    imageIndex = 4
})

var image = document.getElementById('image-replace')
openBtn5.addEventListener('click', () => {
    image.src="Images/5.png"
    imageIndex = 5
})

var image = document.getElementById('image-replace')
openBtn6.addEventListener('click', () => {
    image.src="Images/6.png"
    imageIndex = 6
})

var image = document.getElementById('image-replace')
openBtn7.addEventListener('click', () => {
    image.src="Images/7.png"
    imageIndex = 7
})

var image = document.getElementById('image-replace')
openBtn8.addEventListener('click', () => {
    image.src="Images/8.png"
    imageIndex = 8
})

var image = document.getElementById('image-replace')
openBtn9.addEventListener('click', () => {
    image.src="Images/9.png"
    imageIndex = 9
})

var image = document.getElementById('image-replace')
openBtn10.addEventListener('click', () => {
    image.src="Images/10.png"
    imageIndex = 10
})

var image = document.getElementById('image-replace')
openBtn11.addEventListener('click', () => {
    image.src="Images/11.png"
    imageIndex = 11
})

var image = document.getElementById('image-replace')
openBtn12.addEventListener('click', () => {
    image.src="Images/12.png"
    imageIndex = 12
    
})






//gallery arrow changer

var forwardsArrow = document.getElementById('next-image-arrow');
var backwardsArrow = document.getElementById('back-image-arrow');

forwardsArrow.addEventListener('click', () => {
    switch (imageIndex) {
        case (1):
            imageIndex=2
            image.src="Images/2.png"
            break;
        case (2):
            imageIndex=3
            image.src="Images/3.png"
            break;
        case (3):
            imageIndex=4
            image.src="Images/4.png"
            break;
        case (4):
            imageIndex=5
            image.src="Images/5.png"
            break;
        case (5):
            imageIndex=6
            image.src="Images/6.png"
            break;
        case (6):
            imageIndex=7
            image.src="Images/7.png"
            break;
        case (7):
            imageIndex=8
            image.src="Images/8.png"
            break;
        case (8):
            imageIndex=9
            image.src="Images/9.png"
            break;
        case (9):
            imageIndex=10
            image.src="Images/10.png"
            break;
        case (10):
            imageIndex=11
            image.src="Images/11.png"
            break;
        case (11):
            imageIndex=12
            image.src="Images/12.png"
            break;
        case (12):
            imageIndex=1
            image.src="Images/1.png"
            break;     
    }
})

backwardsArrow.addEventListener('click', () => {
    switch (imageIndex) {
        case (3):
            imageIndex=2
            image.src="Images/2.png"
            break;
        case (4):
            imageIndex=3
            image.src="Images/3.png"
            break;
        case (5):
            imageIndex=4
            image.src="Images/4.png"
            break;
        case (6):
            imageIndex=5
            image.src="Images/5.png"
            break;
        case (7):
            imageIndex=6
            image.src="Images/6.png"
            break;
        case (8):
            imageIndex=7
            image.src="Images/7.png"
            break;
        case (9):
            imageIndex=8
            image.src="Images/8.png"
            break;
        case (10):
            imageIndex=9
            image.src="Images/9.png"
            break;
        case (11):
            imageIndex=10
            image.src="Images/10.png"
            break;
        case (12):
            imageIndex=11
            image.src="Images/11.png"
            break;
        case (1):
            imageIndex=12
            image.src="Images/12.png"
            break;
        case (2):
            imageIndex=1
            image.src="Images/1.png"
            break;     
    }
})







