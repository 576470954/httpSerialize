'use strict';

/**
 * get headers from requestText or responseText
 * @param text
 * @returns headers {{object}}
 */
function textGetHeaders(text) {
    let headerBeginIndex = text.indexOf('\r\n');
    let headerEndIndex = text.indexOf('\r\n\r\n');

    let headersLine = text.slice(headerBeginIndex+2,headerEndIndex);

    let headersArray = headersLine.split('\r\n');
    let headers = {};

    for( let index in headersArray){
        let headerValue = headersArray[index].split(':');
        let firstSapratorIndex = headersArray[index].indexOf(':');
        if(headerValue.length >= 2) {
            headers[headerValue[0]] =  headersArray[index].substr(firstSapratorIndex+1).replace(' ', '');
        }
    }

    return headers;
}

module.exports=textGetHeaders;