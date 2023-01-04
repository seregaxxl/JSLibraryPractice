import $ from '../core';

$.prototype.getAtt = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].getAttribute(attributeName)){
            continue;
        }
        return this[i].getAttribute(attributeName);
    }
    return this;
};


$.prototype.addAtt = function(attributeName, attributeValue) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].attributes){
            continue;
        }
        this[i].setAttribute(attributeName, attributeValue);
    }

    return this;
};

$.prototype.removeAtt = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].getAttribute(attributeName)){
            continue;
        }
        this[i].removeAttribute(attributeName);
    }

    return this;
};

$.prototype.toggleAtt = function(attributeName, attributeValue) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].getAttribute(attributeName) && this[i].attributes){
            this[i].setAttribute(attributeName, attributeValue);
        } else {
            this[i].removeAttribute(attributeName);
        }
    }

    return this;
};

$.prototype.getFirstElemByAtt = function(attributeName, attributeValue) {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].getAttribute(attributeName)){
            continue;
        }
        if(this[i].getAttribute(attributeName) === attributeValue){
            const swap = this[i];
            const objLength = Object.keys(this).length;
            for (let i = 0; i < objLength; i++ ) {
                    delete this[i];
            }
            this[0] = swap;
            this.length = 1;
            return this;
        }
    }
    return 'there is no such element';
};