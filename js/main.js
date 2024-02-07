let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}

function openContact(){
  var card = document.getElementById("contact");
  card.style.height = "500px";
  card.style.border = "1px solid black";
}

function closeContact(){
  var card = document.getElementById("contact");
  card.style.height = "0px";
  card.style.border = "none";
}

document.addEventListener("click", function(event){
  if (event.target.matches(".contact-close") || !event.target.closest(".contact-open") && !event.target.closest(".nav-link") && !event.target.closest(".header-button") && !event.target.closest(".astyle")
  ){
      closeContact()
  }
}, false )
