//ocultando y mostrando desktop-menu
const menuDesktop = document.querySelector('.desktop-menu');
const menuCuenta = document.querySelector('.navbar-email');
menuCuenta.addEventListener("click", function () {
    menuDesktop.classList.toggle('inactive');
});


//ocultando y mostrando Mobile-menu
const lineMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
lineMenu.addEventListener("click", function () {
    //inactivamos el carrito para evitar superposicion
    divCarrito.classList.add('inactive');
    //activamos el menuMobile
    menuMobile.classList.toggle('inactive');
});


// mostrando y ocultando carrito de compras

const liCarrito = document.querySelector('.navbar-shopping-cart');
const divCarrito = document.querySelector('#productCarrito');
liCarrito.addEventListener("click", function () {
    //inactivamos menuMobile para evitar superposicion
    menuMobile.classList.add('inactive');
    menuDesktop.classList.add('inactive');
    //Activamos el carrito
    divCarrito.classList.toggle('inactive');
});


//RAPID API - ENCUENTRO CIENTOS DE APIS GRATIS https://rapidapi.com/
//API PLATZI PRODUCTS
//https://api.escuelajs.co/api/v1/products
//https://jsonplaceholder.typicode.com/albums
//https://fakestoreapi.com/products/



//obteniendo productos de la api de PLATZI
const url = 'https://fakestoreapi.com/products/';
fetch(url)
    .then(response => response.json())
    .then(productos => mostrarProductos(productos))
    .catch(error => console.log(error))

const mostrarProductos = (productos) => {
    for (let i = 0; i < productos.length; i++) {
        const cardContainer = document.querySelector('.cards-container');
        const productCard = document.createElement('div');
        const productInfo = document.createElement('div');
        const imgProduct = document.createElement('img');
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
        const figure = document.createElement('figure');
        const imgCar = document.createElement('img');
        const divProducto = document.createElement('div');

        productCard.classList.add('product-card');
        productInfo.classList.add('product-info');

        productName.innerText = productos[i].title;
        productPrice.innerText = '$ '+productos[i].price;
        imgProduct.setAttribute('src',productos[i].image);

        // for (image of productos[i].images) {
        //     if (!image.includes('any')) {
        //         //console.log(image);
        //         imgProduct.setAttribute('src', image);
        //         break;

        //     } else {
        //         imgProduct.setAttribute('src', 'https://i.imgur.com/ZANVnHE.jpeg');
        //         break;
        //     }
        // }

        //probando
        const modalProduct = document.querySelector('.modal');
        imgProduct.addEventListener("click", function () {
            console.log('PROBANDO');
            modalProduct.classList.toggle('inactive');
        });
        //

        imgCar.setAttribute('src', './icons/bt_add_to_cart.svg');
        figure.appendChild(imgCar);

        divProducto.appendChild(productName);
        divProducto.appendChild(productPrice);

        productInfo.appendChild(divProducto);
        productInfo.appendChild(figure);

        productCard.appendChild(imgProduct);
        productCard.appendChild(productInfo);
        cardContainer.appendChild(productCard);
    }
}

//PRODUCT DETAIL

// const productCardS = document.querySelector('.product-card');
// const modalProduct = document.querySelector('.modal');


