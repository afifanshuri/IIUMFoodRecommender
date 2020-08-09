var currentSlide = 1;
var slides = document.getElementsByClassName('slideshow');

//initialize slideshow to be at slide 1 everytime refresh
for(x=0;x<slides.length;x++){
  slides[x].style.display="none";
}
slides[currentSlide-1].style.display="block";

//function called from clicking change slide button
function changeSlide(n){
  showSlide(currentSlide+=n);
}

//change slide
function showSlide(n){
  if(currentSlide>slides.length){currentSlide=1}
  if(currentSlide<1){currentSlide=slides.length}
  for(x=0;x<slides.length;x++){
    slides[x].style.display="none";
  }
  slides[currentSlide-1].style.display="block";
}

//logo animation
$(document).ready(function(){
  $(".logo").fadeIn("slow");
})
