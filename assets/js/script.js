'use strict';


//**preload */ loading weill be end after document is loaded*/

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded")
});



/**
 * add event listener on multiple elements
 */


const addEventOnElements = function (elements, eventType, callback) {
    for (let i =0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/**
 * NAVBAR 
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[ data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


/**
 * HEADER  & backtotopbtn
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollpos = 0;

const activeHeader = function () {
    const isScrollBottom = lastScrollpos < window.scrollY;
    if (isScrollBottom) {
        header.classList.add("hide");
    } else {
         header.classList.remove("hide");
    }


    lastScrollpos = window.scrollY;
}

window.addEventListener("scroll",function (){
    if (window.scrollY >= 50 ) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
        activeHeader();
    }else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});

const hideHeader = function () {
    const lastScrollpos = isScrollBottom < window.scrollY;
    if (lastScrollpos) {
        header.classList.add("active");
    } else {
         header.classList.remove("active");
    }


    lastScrollpos = window.scrollY;
}

/**
 * HEro slider
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[ data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[ data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const SlideNext = function () {
    if(currentSlidePos >= heroSliderItems.length - 1) {
        currentSlidePos = 0;
    }else {
        currentSlidePos++;
    }

    updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", SlideNext);

const slidePrev =function () {
    if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length - 1;
    }else {
        currentSlidePos--;
    }


    updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slider
 */


let autoSlideInterval;


const autoSlide = function () {
    autoSlideInterval = setInterval(function () {
    SlideNext();
    },7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
    clearInterval(autoSlideInterval);
});


addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);
window.addEventListener("load", autoSlide);



/**
 * parallax effect
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {
  
   x = (event.clientX / window.innerWidth * 10) - 5;
   y = (event.clientY / window.innerHeight * 10) - 5;

   // reverse the number eg. 20 --> -20, -5 --> 5
   x = x - (x * 2);
   y = y - (y * 2);

   for(let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`; 
   }

});


/**
 * scroll up
 */


//  window.addEventListener('wheel', function(event) {
//     if (event.deltaY < 0) {
// window.scrollBy({
//             top: -600, 
//             behavior: 'smooth'
//         });
//     }
// });



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
    
// const scrollActive = () =>{
//   	const scrollDown = window.scrollY

// 	sections.forEach(current =>{
// 		const sectionHeight = current.offsetHeight,
// 			  sectionTop = current.offsetTop - 58,
// 			  sectionId = current.getAttribute('id'),
// 			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

// 		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
// 			sectionsClass.classList.add('active-link')
// 		}else{
// 			sectionsClass.classList.remove('active-link')
// 		}                                                    
// 	})
// }
// window.addEventListener('scroll', scrollActive)

// /*=============== SHOW SCROLL UP ===============*/ 
// const scrollUp = () =>{
// 	const scrollUp = document.getElementById('scroll-up')
//     // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
// 	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
// 						: scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)