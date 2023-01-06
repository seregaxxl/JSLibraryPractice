import $ from '../core';

// $.prototype.accordion = function(headActiveClass = 'accordion-head-active', contentActiveClass =
//  'accordion-content-active', paddings = 40) {
//     for(let i =0; i < this.length; i++) {
//         $(this[i]).click(()=>{ 
//             if(this[i].classList.contains(headActiveClass)) {
//                 $(this[i]).removeClass(headActiveClass)
//                 .closest('.accordion')
//                 .find('.accordion-content')
//                 .removeClass(contentActiveClass);
//             } else {
//                 $(this[i])
//                 .addClass(headActiveClass)
//                 .siblings()
//                 .removeClass(headActiveClass)
//                 .closest('.accordion')
//                 .find('.accordion-content')
//                 .removeClass(contentActiveClass)
//                 .eq(i)
//                 .addClass(contentActiveClass);
//             }
            
//         });
//     }
// };

$.prototype.accordion = function(headActiveClass = 'accordion-head-active', contentActiveClass =
 'accordion-content-active') {
    for(let i =0; i < this.length; i++) {
        $(this[i]).click(()=>{ 
            if(this[i].classList.contains(headActiveClass)) {
                $(this[i]).removeClass(headActiveClass)
                .closest('.accordion')
                .find('.accordion-content')
                .eq(i)
                .removeClass(contentActiveClass);
            } else {
                $(this[i])
                .addClass(headActiveClass)
                .closest('.accordion')
                .find('.accordion-content')
                .eq(i)
                .addClass(contentActiveClass);
            }
            
        });
    }
};

$('.accordion-head').accordion();