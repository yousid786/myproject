let nikahSlide = document.querySelector('.nikah-card');
let nikahBtn = document.querySelector('#nikah-btn');


nikahBtn.onclick = () =>
{
    nikahSlide.classList.toggle('active');
    valimaSlide.classList.remove('active');
}

let valimaSlide = document.querySelector('.valima-card');
let valimaBtn = document.querySelector('#valima-btn');


valimaBtn.onclick = () =>
{
    nikahSlide.classList.remove('active');
    valimaSlide.classList.toggle('active');
}


window.onscroll = () =>
{
    nikahSlide.classList.remove('active');
    valimaSlide.classList.remove('active');
}


const slides = document.querySelectorAll('.slide')
var counter = 0;



const goNext = () => {
    if (counter < slides.length - 1) {
    counter++;
    slideImage();
    }
    };
    const goPrev = () => {
    if (counter != 0) {
    counter--;
    slideImage();
    }
    };

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`;
    }
)

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
};