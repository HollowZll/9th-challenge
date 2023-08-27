const hamburger = document.getElementById("btnID");
const mobileMenu = document.getElementById("menu");
const x = document.getElementById('btnClose');
const fade = document.getElementById('fade')


hamburger.addEventListener("click", () => { 
         mobileMenu.style.visibility = 'visible';
        //  fade.style.opacity = '30%';
         fade.style.backgroundColor = 'rgb(128,127,138)'
         fade.style.height = '1000px'
      });

x.addEventListener('click', () => {
    mobileMenu.style.visibility = "hidden";
    fade.style.opacity = '100%';
    fade.style.backgroundColor = 'white'
    fade.style.height = '1000px'
})







