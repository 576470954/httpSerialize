'use strict';

function textIsRequest(text) {
    if(text.startWith('HTTP')){
        return false;
    }else{
        return true;
    }
}

module.exports = textIsRequest;