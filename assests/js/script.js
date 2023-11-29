//-----------------------------start slideshow---------------------------------------------
let slideShowArea = document.querySelector(".slideShow");
const arrImages = ["1.jpg", "3.jpg", "4.jpg", "5.jpg"];
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * arrImages.length);
  console.log(randomNumber);
  slideShowArea.style.background =
    'url("assests/img/' + arrImages[randomNumber] + '")';
}, 1500);
//------------------------------owlcaresoul-------------------------------------
$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    navigation: true, // Show next and prev buttons
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
  });
});
