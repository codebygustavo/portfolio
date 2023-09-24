function toggleMenu() {
  const menuIcon = document.getElementById("menuButton");
  const menu = document.querySelector(".header nav");
  menuIcon.classList.toggle("ri-close-line");
  menuIcon.classList.toggle("ri-menu-3-fill");
  menu.classList.toggle("active");
}
document.getElementById("menuButton").addEventListener("click", toggleMenu);
const backToTopButton = document.querySelector(".returnToTop");
const header = document.querySelector(".header");
const scrollDown = () => {
  if (window.scrollY >= 600) {
    backToTopButton.classList.add("showReturnToTop");
    header.classList.add("headerShow")
  } else {
    backToTopButton.classList.remove("showReturnToTop");
    header.classList.remove("headerShow")
  }
};
function toggleColors() {
  const body = document.body;
  const buttonChangeColor = document.querySelector(".changeColor");
  body.classList.toggle("black");
  buttonChangeColor.classList.toggle("ri-sun-foggy-fill");
  buttonChangeColor.classList.toggle("ri-moon-clear-fill");
}
const buttonChangeColor = document.querySelector(".changeColor");
buttonChangeColor.addEventListener("click", toggleColors);
document.getElementById("emailButton").addEventListener("click", function () {
  var email = "hbw3.gustavo@gmail.com";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      if (this.innerText == "Email - Copiado") {
        alert("Email já Copiado");
      } else {
        this.innerText += " - Copiado";
      }
    })
    .catch((err) => {
      if (this.innerText == "Email - Erro") {
        this.innerText = "Email - Erro";
      } else {
        this.innerText += " - Erro";
      }
    });
});
window.addEventListener("scroll", function () {
  scrollDown();
});
ScrollReveal().reveal(".scrollRevealOne", {
  origin: "bottom",
  distance: "50px",
  duration: 500,
  reset: !0,
});
ScrollReveal().reveal(".scrollRevealTwo", {
  origin: "bottom",
  distance: "80px",
  duration: 550,
  reset: !0,
});

$(document).on('click', '.projectFilter li', function () {
  $(this).addClass('projectFilterActive').siblings().removeClass('projectFilterActive')
});
$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr('data-filter');
    if(value == 'all'){
      $('#projectsPage .card').show('1000');
    }else{
      $('#projectsPage .card').not('.'+value).hide('1000');
      $('#projectsPage .card').filter('.'+value).show('1000');
    }
  })
})

$(document).ready(function(){
  $('nav a').click(function(){
    $('nav a').removeClass('activeNavItem');
    $(this).addClass('activeNavItem')
  });
});