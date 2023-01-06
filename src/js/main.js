import './lib/lib';
import $ from './lib/lib';

// $('.wrapper').html(
//     `
//     <div class="dropdown">
//             <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//             <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//                 <a href="#" class="dropdown-item">Action</a>
//                 <a href="#" class="dropdown-item">Action #2</a>
//                 <a href="#" class="dropdown-item">Action #3</a>
//             </div>
//         </div>
//     `
// )
$('.dropdown-toggle').dropDown();
// $('.okoko').dropDown();
// $('[data-toggle="modal"]').modal();
$('#trigger').click(()=>$('#trigger').createModal({
    text: {
        title: 'modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque '
    },
    btns: {
        count: 3,
        settings:[
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ], 
            [
                'Save-changes',
                ['btn-success'],
                false,
                () => {
                    alert('данные сохранены');
                }
            ],
            [
                'Another button',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('hello world');
                }
            ]
        ]
    }
}));

// $('#first').click(function () {
//     $('.card').eq(0).fadeIn(800);
// });

// $('button').getFirstElemByAtt('data-count', "second").click(function () {
//     $('.block-center').eq(1).fadeOut(2000);
// });

// $('[data-count="second"]').click(function () {
//     $('.card').eq(0).fadeOut(800);
// });
// $('.btn.btn-warning').click(function () {
//     $('.block-center').fadeToggle(800);
// });



// $('div').on('click', function () {
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.more'));

// console.log($('.some').siblings('.findme'));
// $('button').fadeIn(1800);



