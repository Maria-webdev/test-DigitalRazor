import './index.css';

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelectorAll('.product');

let index = 0;

const activeSlide = n => {
  slides.forEach((item) => {
    item.classList.remove('active');
  })
  slides[n].classList.add('active');
}

const prevSlide = () => {
  if(index == 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index --;
    activeSlide(index);
  }
}

const nextSlide = () => {
  if(index == slides.length -1) {
    index = 0;
    activeSlide(index);
  } else {
    index ++;
    activeSlide(index);
  }
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);
