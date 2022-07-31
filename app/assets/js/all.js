let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');

burgerMenu.addEventListener('click',()=>{
  menu.classList.toggle('action');
});

$(document).ready(function () {

  $('.optical-bt').click(function(event){
    $(this).addClass('active');
    $('.sunglasses-bt').removeClass('active');
    $('.optical').removeClass('d-none');
    $('.sunglasses').addClass('d-none');
  });

  $('.sunglasses-bt').click(function(event){
    $(this).addClass('active');
    $('.optical-bt').removeClass('active');
    $('.optical').addClass('d-none');
    $('.sunglasses').removeClass('d-none');
  })





});