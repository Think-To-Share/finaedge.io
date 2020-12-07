require('../scss/app.scss');
require('bootstrap');

document.querySelector('.burger-nav #menu').addEventListener('click', () =>{
    document.querySelector("#menu").classList.toggle("change");
    document.querySelector("#nav").classList.toggle("change");

    document.querySelector("#menu-bg").classList.toggle("change-bg");
    // document.querySelector('body').classList.toggle('nav-menu-opened')
});
