//ocultando y mostrando desktop-menu
const menuDesktop = document.querySelector('.desktop-menu');
const menuCuenta = document.querySelector('.navbar-email');
menuCuenta.addEventListener("click", function(){
    menuDesktop.classList.toggle('inactive');
});


//ocultando y mostrando Mobile-menu
const lineMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
lineMenu.addEventListener("click", function (){
    menuMobile.classList.toggle('inactive');
});


