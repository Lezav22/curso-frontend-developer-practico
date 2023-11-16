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
    //inactivamos el carrito para evitar superposicion
    divCarrito.classList.add('inactive');
    //activamos el menuMobile
    menuMobile.classList.toggle('inactive');
});


// mostrando y ocultando carrito de compras

const liCarrito = document.querySelector('.navbar-shopping-cart');
const divCarrito = document.querySelector('.product-detail');
liCarrito.addEventListener("click",function(){
    //inactivamos menuMobile para evitar superposicion
    menuMobile.classList.add('inactive');
    menuDesktop.classList.add('inactive');
    //Activamos el carrito
    divCarrito.classList.toggle('inactive');
});


//RAPID API - ENCUENTRO CIENTOS DE APIS GRATIS https://rapidapi.com/
//API PLATZI PRODUCTS
//https://api.escuelajs.co/api/v1/products