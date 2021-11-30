var Index = 1;

showSlides(Index);

function plusSlides() {
  showSlides(Index+1);
}

function minusSlides() {
  showSlides(Index - 1);
}

function currentSlide() {
  showSlides(Index);
}

function showSlides(n) {

  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
        Index = 1;
    }
  else if (n < 1) {
        Index = slides.length;
    }
    else{
        Index = n;
    }
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  var normSlide = document.getElementById(Index);

  normSlide.style.display = "block";
}
