import $ from '../core';

$.prototype.show = function() {
    for (let i = 0; i < this.length; i++ ) {
        if (!this[i].style) {continue;}
        this[i].style.display = '';
    }
    return this;
};

$.prototype.hide = function() {
    
    for (let i = 0; i < this.length; i++ ) {
        if (!this[i].style) {continue;}
        this[i].style.display = 'none';
    }
    return this;
};

$.prototype.toggle = function() {
    for (let i = 0; i < this.length; i++ ) {
        if (!this[i].style) {
            console.log('1');
            continue;
        }
        if (this[i].style.display === 'none'){
            console.log('2');
            this[i].style.display = '';
        } else {
            console.log('3');
            this[i].style.display = 'none';
        }
    }
    return this;
};