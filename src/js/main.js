import './lib/lib';
import $ from './lib/lib';

$('.wrapper').html(
    `
    <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Action #2</a>
                <a href="#" class="dropdown-item">Action #3</a>
            </div>
        </div>
    `
)
$('.dropdown-toggle').dropDown();
$('.okoko').dropDown();

// $('#first').click(function () {
//     $('.block-center').eq(0).fadeToggle(800);
// });
// $('button').getFirstElemByAtt('data-count', "second").click(function () {
//     $('.block-center').eq(1).fadeOut(2000);
// });

// $('[data-count="second"]').click(function () {
//     $('.block-center').eq(1).fadeToggle(800);
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



