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

let featureSec = document.querySelector("#features");
let featureYPos = featureSec.offsetTop;
let featureXPos = featureSec.offsetLeft -70;
let btnFeature = document.querySelector('[href="#features"]');

btnFeature.addEventListener("click", function(e){
	window.scroll({ top: featureYPos, left: featureXPos, behavior: "smooth" });
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

// Scroll resize coord fix
window.addEventListener("resize", getCoord);

function getCoord(){
    aboutUsYPos = secAboutUs.offsetTop;
    aboutUsXPos = secAboutUs.offsetLeft - 70;
    featureYPos = featureSec.offsetTop;
    featureXPos = featureSec.offsetLeft - 70;
    pricingYPos = secPricing.offsetTop;
    pricingXPos = secPricing.offsetLeft - 70;
}

// Anchor scroll
let refLink = document.querySelector("#slack-ref");

refLink.addEventListener("click", function(ev){
    ev.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

// Robot Chest Display Messages
let robotChest = document.querySelector(".chest-display");
let robotChestMessages = ["My name is TickyBot", "How are you today?", "Are you Good?",  "Hope you have a good day", "Hello humans"];
setInterval(() => { 
  robotChestMessages.forEach((message, index, arr) => {
    if(index === 0){
      robotChest.innerHTML = message; 
      let currentMessage = arr.shift();
      arr.push(currentMessage);
    } 
});
}, 5000);


