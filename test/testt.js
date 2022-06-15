const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelector('.carousel-slide img');

// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = $(window).width();
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
nextBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
});