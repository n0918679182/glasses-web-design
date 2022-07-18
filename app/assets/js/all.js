let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');

burgerMenu.addEventListener('click',()=>{
  menu.classList.toggle('action');
});