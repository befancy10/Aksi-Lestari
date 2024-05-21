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

// button slider testi 1

currentSlideID = 1;

sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;
console.log(totalSlides)

function next(){
    if (currentSlideID < totalSlides)
        currentSlideID++;
        showSlide()
}

function prev(){
    if (currentSlideID > 1)
        currentSlideID--;
        showSlide()
}

function showSlide(){
    slides =document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++){
        const element = slides[index]
        if (currentSlideID == index + 1){
            element.classList.remove('hidden')
        }
        else {
            element.classList.add('hidden')
        }
    }
}

// button slider testi 2

currentSlideID2 = 1;

sliderElement2 = document.getElementById('slider2');
totalSlides2 = sliderElement2.childElementCount;
console.log(totalSlides2)

function next2(){
    if (currentSlideID2 < totalSlides2)
        currentSlideID2++;
        showSlide2()
}

function prev2(){
    if (currentSlideID2 > 1)
        currentSlideID2--;
        showSlide2()
}

function showSlide2(){
    slides2 =document.getElementById('slider2').getElementsByTagName('li')
    for (let index2 = 0; index2 < totalSlides2; index2++){
        const element = slides2[index2]
        if (currentSlideID2 == index2 + 1){
            element.classList.remove('hidden')
        }
        else {
            element.classList.add('hidden')
        }
    }
}

// const carousel = document.getElementById('carousel');
// const nextButton = document.getElementById('nextButton');
// const prevButton = document.getElementById('prevButton');

// let currentSlide = 0;

// nextButton.addEventListener('click', () => {
//   currentSlide++;
//   carousel.scrollLeft += carousel.offsetWidth; // Adjust scroll position based on slide width
// });

// prevButton.addEventListener('click', () => {
//   currentSlide--;
//   carousel.scrollLeft -= carousel.offsetWidth;
// });


