var headerMain = document.querySelector('.header');
var home = document.querySelector('.home');

var link = document.querySelectorAll('.nav__href');

var swapItem1 = document.querySelector('.header__img-first');
var swapItem2 = document.querySelector('.header__img-second');

var sections = document.querySelectorAll('section');
var nav = document.querySelector('.nav');



window.addEventListener('scroll', function () {

    if (window.scrollY < 100) {
        headerMain.style.background = "transparent";
        menuF.classList.remove('menu-white');
        swapItem1.style.display = "block";
        swapItem2.style.display = "none";

        for (var i = 0; i <= link.length; i++) {
            link[i].style.color = "#000";

        }
    } else {
        menuF.classList.add('menu-white');
        headerMain.style.background = "#458FF6";
        swapItem1.style.display = "none";
        swapItem2.style.display = "block";

        for (var i = 0; i < link.length; i++) {
            link[i].style.color = "#fff";
        }
    }

    document.querySelectorAll('section').forEach((el, i) => {
        var scrollDistance = window.scrollY;

        console.log(el.offsetTop - nav.clientHeight + ' el');
        console.log(scrollY + ' scroll');
        if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
            document.querySelectorAll('.nav a').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });

            document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
        }
    });
});

$(document).ready(function () {
    $('.carousel').slick({
        infinite: false,
        dots: true,
    });
});


var menuF = document.querySelector('.menu');
var menuBars = document.querySelectorAll('.menu__item');
var links = document.querySelectorAll('.nav__link');

menuF.addEventListener('click', function () {
    nav.classList.toggle('nav-hide');
    home.classList.toggle('home-trans');
    nav.classList.add('nav-anim');
    menuF.classList.toggle('menu-active');
    headerMain.classList.toggle('header-padding-in');
});

window.addEventListener('resize', function () {
    if (window.innerWidth <= '880px') {
        nav.classList.add('nav-anim');
    } else {
        nav.classList.remove('nav-anim');
    }
})

