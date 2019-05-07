'use strict';
const request = require('http').request;

/**
 * convert text to response
 *
 * @param text {plain text in http format}
 */
function textToResponse(text,resp) {
    let headerBeginIndex = text.indexOf('\r\n');
    let headerEndIndex = text.indexOf('\r\n\r\n');

    let firstLine = text.slice(0,headerBeginIndex);
    let headersLine = text.slice(headerBeginIndex+2,headerEndIndex);
    let bodyLine = text.substr(headerEndIndex+4);

    let httpVersion = firstLine.split(' ')[0].substr(5);// HTTP/1.1 to 1.1
    let statusCode = firstLine.split(' ')[1];
    let statusMessage = firstLine.split(' ')[2];

    let headers = headersLine.split('\r\n');

    resp.statusCode = statusCode;
    resp.statusMessage = statusMessage;
    for( let index in headers){
        let headerValue = headers[index].split(':');
        if(headerValue.length === 2) {
            resp.setHeader(headerValue[0], headerValue[1].replace(' ', ''));
        }
    }
    resp.write(bodyLine);
    resp.end();
}

module.exports=textToResponse;