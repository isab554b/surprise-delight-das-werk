const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");

const logo = document.querySelector("#logo");

const guitarlyd = document.querySelector("#guitarlyd");
const guitarlyd2 = document.querySelector("#guitarlyd2");

window.addEventListener("load", sidenVises);

function sidenVises() {
  img1.addEventListener("mousedown", mousedownHandlerImg1);
  img2.addEventListener("mousedown", mousedownHandlerImg2);
  img3.addEventListener("mousedown", mousedownHandlerImg3);
  img4.addEventListener("mousedown", mousedownHandlerImg4);
  logo.addEventListener("mousedown", mousedownHandlerLogo);
}

function mousedownHandlerImg1() {
  img1.classList.add("rotate-scale-up");
  img1.addEventListener("animationend", animationendHandlerImg1);
  guitarlyd.play();
}

function animationendHandlerImg1() {
  img1.classList.remove("rotate-scale-up");
}

function mousedownHandlerImg2() {
  img2.classList.add("rotate-scale-up");
  img2.addEventListener("animationend", animationendHandlerImg2);
  guitarlyd.play();
}

function animationendHandlerImg2() {
  img2.classList.remove("rotate-scale-up");
}

function mousedownHandlerImg3() {
  img3.classList.add("rotate-scale-up");
  img3.addEventListener("animationend", animationendHandlerImg3);
  guitarlyd.play();
}

function animationendHandlerImg3() {
  img3.classList.remove("rotate-scale-up");
}

function mousedownHandlerImg4() {
  img4.classList.add("rotate-scale-up");
  img4.addEventListener("animationend", animationendHandlerImg4);
  guitarlyd.play();
}

function animationendHandlerImg4() {
  img4.classList.remove("rotate-scale-up");
}

function mousedownHandlerLogo() {
  guitarlyd2.play();
}
