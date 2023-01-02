import './lib/lib';
import $ from './lib/lib';

$('button').on('click', function () {
    $('div').removeAtt('data-modal');
});

$('.ret').on('click', function () {
    $('.active').addAtt('data-modal', '123');
});

