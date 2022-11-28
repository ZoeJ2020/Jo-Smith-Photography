let slideIndex = 1; //set index to 1

function runLoad(){
    showSlides(slideIndex); //run showslides function
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n); //show next slide, add 1 to slide count
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n); //show previous slide, remove slide count
}

function showSlides(n) { //function to show slides

  let i; // i = count
  let slides = document.getElementsByClassName("slides"); //get slide div

  if (n > slides.length){
    slideIndex = 1; //if count goes over number of slides, reset to 1
    }

  if (n < 1){
    slideIndex = slides.length; //if count goes under 1, reset to last slide in list
    }

  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none"; //hide other slides
  }
  slides[slideIndex-1].style.display = "block"; //show current slide
} 