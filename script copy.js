function changeCss() {
  var bodyElement = document.querySelector("body");
  var navElement = document.querySelector("nav");
  this.scrollY > 500
    ? (navElement.style.opacity = 0.8)
    : (navElement.style.opacity = 1);
}

window.addEventListener("scroll", changeCss, false);
