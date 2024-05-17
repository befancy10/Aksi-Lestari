// <!-- script for scroll down to div id="about" when button Explore me is clicked -->
document.getElementById('scrollAbout').addEventListener('click', function() {
    // Get the position of the target element
    const aboutElement = document.getElementById('about');
    const aboutPosition = aboutElement.offsetTop;

    // Scroll to the target element
    window.scrollTo({
        top: aboutPosition,
        behavior: 'smooth'
    });
});

const carousel = document.getElementById('carousel');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

let currentSlide = 0;

nextButton.addEventListener('click', () => {
  currentSlide++;
  carousel.scrollLeft += carousel.offsetWidth; // Adjust scroll position based on slide width
});

prevButton.addEventListener('click', () => {
  currentSlide--;
  carousel.scrollLeft -= carousel.offsetWidth;
});


