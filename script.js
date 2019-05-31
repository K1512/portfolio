//HAMBURGER
let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	navMenu.classList.add("onzichtbaar");
}
mainGedeelte.addEventListener("click",verbergMenu);
function toonMenu() {
	navMenu.classList.remove("onzichtbaar");
}
menuKnop.addEventListener("click",toonMenu);

function draai() {
	navMenu.classList.add("draaiknop");
}
menuKnop.addEventListener("click", draai);

function geenDraai() {
	navMenu.classList.remove("draaiknop");
}
mainGedeelte.addEventListener("click", geenDraai);

//DARKMODE
let darkLink = document.querySelectorAll("div a")[0];
let lightLink = document.querySelectorAll("div a")[1];
let mijnBody = document.querySelector("body");
function switchToLight() {
	mijnBody.classList.add("light");
}
function switchToDark() {
	mijnBody.classList.remove("light");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);
