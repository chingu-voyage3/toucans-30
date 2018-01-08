"use strict";

// Scroll to top button functionality

window.addEventListener("scroll", showTopBtn);
let scrollTopBtn = document.querySelector("#scrollToTop");
scrollTopBtn.addEventListener("click", scrollToTop);

function showTopBtn(){
	let currentY = window.pageYOffset;
	return window.innerWidth > 300 &&  currentY > 400 ? scrollTopBtn.style.opacity = 1 : scrollTopBtn.style.opacity = 0;
}

function scrollToTop(){
	window.scroll({ top: 0, left: 0, behavior: "smooth" });
}

// Scroll links functionality

let secAboutUs = document.querySelector("#aboutUs");
let aboutUsYPos = secAboutUs.offsetTop;
let aboutUsXPos = secAboutUs.offsetLeft - 70;
let btnAboutUs = document.querySelector('[href="#aboutUs"]');

btnAboutUs.addEventListener("click", function(e){
	window.scroll({ top: aboutUsYPos, left: aboutUsXPos, behavior: "smooth" });
	e.preventDefault();
});

let secPricing = document.querySelector("#pricing");
let pricingYPos = secPricing.offsetTop;
let pricingXPos = secPricing.offsetLeft - 70;
let btnPricing = document.querySelector('[href="#pricing"]');

btnPricing.addEventListener("click", function(e){
	window.scroll({ top: pricingYPos, left: pricingXPos, behavior: "smooth" });
	e.preventDefault();
});



