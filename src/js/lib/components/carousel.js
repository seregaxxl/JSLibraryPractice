import $ from '../core';

$.prototype.carousel = function(settings = {auto: false, end: false}) {
    let paused = false;

    function nextSlide(offset, widthNum, slides, dots, slidesField) {
        if(settings.end && offset/widthNum === slides.length - 1) {
            return offset;
        }
        if(offset == widthNum * (slides.length - 1) ) {
            offset = 0;
        } else {
            offset += widthNum;
        }
        dots.forEach(dot=>{dot.classList.remove('active');});
        dots[offset/widthNum].classList.add('active');
        slidesField.style.transform = `translateX(${-offset}px)`;
        return offset;
    } 

    function prevSlide(offset, widthNum, slides, dots, slidesField) {
        if(settings.end && offset/widthNum === 0) {
            return offset;
        }
        if(offset == 0) {
            offset = widthNum * (slides.length - 1);
        } else {
            offset -= widthNum;
        }
        dots.forEach(dot=>{dot.classList.remove('active');});
        dots[offset/widthNum].classList.add('active');
        slidesField.style.transform = `translateX(${-offset}px)`;
        return offset;
    }

    function slideTo(offset, widthNum, dots, slidesField, slideToNum) {
        offset = widthNum * slideToNum;
            dots.forEach(dot=>{dot.classList.remove('active');});
            dots[offset/widthNum].classList.add('active');
            slidesField.style.transform = `translateX(${-offset}px)`;
            return offset;
    }

    for(let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const widthNum = +width.replace(/\D/g, '');
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');
        let offset = 0;

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide=>{
            slide.style.width = width;
        });

        $(this[i].querySelector('[data-slide="next"]')).click((e)=>{
            e.preventDefault();
           offset = nextSlide(offset, widthNum, slides, dots, slidesField);
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e)=>{
            e.preventDefault();
            offset = prevSlide(offset, widthNum, slides, dots, slidesField);
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(e=>{
            const slideToNum = e.target.getAttribute('data-slide-to');
            offset = slideTo(offset, widthNum, dots, slidesField, slideToNum);
        }); 
        if (settings.auto) {
            paused = setInterval(() => {
                offset = nextSlide(offset, widthNum, slides, dots, slidesField);
            }, settings.auto);
            this[i].addEventListener('mouseenter', () => {
                clearInterval(paused);
            });

            this[i].addEventListener('mouseleave', () => {
                paused = setInterval(() => {
                    offset = nextSlide(offset, widthNum, slides, dots, slidesField);
                }, settings.auto);
            });
        }
    } 
};

$.prototype.createSlider = function(sliderSet) {
    for(let i = 0; i < this.length; i++) {
        this[i].style.width = sliderSet.width + 'px';
        this[i].style.height = sliderSet.height + 'px';

        this[i].innerHTML = `
        <ol class="carousel-indicators">
        </ol>
        <div class="carousel-inner">
            <div class="carousel-slides">
            </div>
        </div>
        <a href="#" class="carousel-prev" data-slide="prev">
            <span class="carousel-prev-icon">&lt;</span>
        </a>
        <a href="#" class="carousel-next" data-slide="next">
            <span class="carousel-next-icon">&gt;</span>
        </a>
        `;

        for (let j = 0; j < sliderSet.slides.length; j++) {
            let dot = document.createElement('li'),
                sliderItm = document.createElement('div'),
                sliderImg = document.createElement('img');

            dot.setAttribute('data-slide-to', j);
            this[i].querySelector('.carousel-indicators').append(dot);
            sliderItm.classList.add('carousel-item');
            this[i].querySelector('.carousel-slides').append(sliderItm);
            sliderImg.setAttribute('src', sliderSet.slides[j]['imgUrl']);
            sliderImg.setAttribute('alt', sliderSet.slides[j]['name']);
            sliderItm.append(sliderImg);
        }
    } 
    return this;
};

$('.carousel').createSlider({
    width: 700,
    height: 400, 
    slides: [{
        name: 'photo', 
        imgUrl: 'https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg'
    },
    {
        name: 'photo', 
        imgUrl: 'https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg'
    },
    {
        name: 'photo', 
        imgUrl: 'https://pixlr.com/images/best-photo-editor-cover.jpg'
    }
    ]

});

let settings = {auto: 1000, end: false};
$('.carousel').carousel(settings);