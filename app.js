'use strict';

const addEventOnElem = function(elem, type, callback) {
    if(elem.length > 1) {
        for(let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback)
    }
}
// navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-navbar-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    navbarToggler.classList.toggle("active");
}
addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  }
addEventOnElem(navbarLinks, "click", closeNav);


// header

const header = document.querySelector("[data-header]")

window.addEventListener("scroll", function () {
    if(window.scrollY >= 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});


