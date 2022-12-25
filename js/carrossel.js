
// funcao passar o slide
var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var totalSlides = slides.length;

function nextSlide() {
  goToSlide(currentSlide+1);
}

function previousSlide() {
  goToSlide(currentSlide-1);
}

function goToSlide(n) {
  slides[currentSlide].style.left = '-100%';
  currentSlide = (n+totalSlides)%totalSlides;
  slides[currentSlide].style.left = '0';
}
// funcao que seta intervalo do passamento automatico
 setInterval(nextSlide, 3700);

// paginacao pelos  botoess
var nextButton = document.querySelector('#next');
var previousButton = document.querySelector('#previous');

nextButton.addEventListener('click', nextSlide);
previousButton.addEventListener('click', previousSlide);


// funcao de paginacao
var dots = document.querySelectorAll('.dot');

function updateDots() {
  for (var i = 0; i < dots.length; i++) {
    if (i === currentSlide) {
      dots[i].style.backgroundColor = 'black';
    } else {
      dots[i].style.backgroundColor = 'gray';
    }
  }
}

updateDots();
function goToSlide(n) {
    slides[currentSlide].style.left = '-100%';
    currentSlide = (n+totalSlides)%totalSlides;
    slides[currentSlide].style.left = '0';
    updateDots();
  }


  