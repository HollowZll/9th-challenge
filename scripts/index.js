const hamburger = document.getElementById("btnID");
const mobileMenu = document.getElementById("menu");
const x = document.getElementById("btnClose");
const fade = document.getElementById("fade");
const retroImage = document.getElementById("retroImgMob");
const orangeButon = document.getElementById("orangeButton");

hamburger.addEventListener("click", () => {
  mobileMenu.style.visibility = "visible";
  //  fade.style.opacity = '30%';
  fade.style.backgroundColor = "rgb(128,127,138)";
  retroImage.style.filter = "brightness(40%)";
  orangeButon.style.color = "gray";
  orangeButon.style.backgroundColor = "rgb(121,47,53)";
  orangeButon.style.opacity = "0.8";
  fade.style.height = "1820px";
});

x.addEventListener("click", () => {
  mobileMenu.style.visibility = "hidden";
  fade.style.opacity = "100%";
  fade.style.backgroundColor = "white";
  fade.style.height = "1820px";
  retroImage.style.filter = "contrast(100%)";
  orangeButon.style.color = "white";
  orangeButon.style.backgroundColor = "hsl(5, 85%, 63%)";
  orangeButon.style.opacity = "1";
  retroImage.style.opacity = "1";
});

// let mediaQuerry = (desktop) => {
//   if (desktop.matches) {
//     document.mobileMenu.style.visibility = "visible";
//   }
// };

// let desktop = window.matchMedia("(min-width: 385px)");
// mediaQuerry(desktop);
// desktop.addEventListener(mediaQuerry);
