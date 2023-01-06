import $ from '../core';

$.prototype.accordion = function() {
    for(let i =0; i < this.length; i++) {
        $(this[i]).click(()=>{ 
            if(this[i].classList.contains('accordion-head-active')) {
                $(this[i]).removeClass('accordion-head-active')
                .closest('.accordion')
                .find('.accordion-content')
                .removeClass('accordion-content-active');
            } else {
                $(this[i])
                .addClass('accordion-head-active')
                .siblings()
                .removeClass('accordion-head-active')
                .closest('.accordion')
                .find('.accordion-content')
                .removeClass('accordion-content-active')
                .eq(i)
                .addClass('accordion-content-active');
            }
            
        });
    }
};

$('.accordion-head').accordion();