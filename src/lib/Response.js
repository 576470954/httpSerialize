'use strict';

/**
 *
 * @param text
 * @constructor
 */
function Response(text) {
    let headerBeginIndex = text.indexOf('\r\n');
    let headerEndIndex = text.indexOf('\r\n\r\n');

    let firstLine = text.slice(0,headerBeginIndex);
    let headersLine = text.slice(headerBeginIndex+2,headerEndIndex);
    let bodyLine = text.substr(headerEndIndex+4);

    let httpVersion = firstLine.split(' ')[0].substr(5);// HTTP/1.1 to 1.1
    let statusCode = firstLine.split(' ')[1];
    let statusMessage = firstLine.split(' ')[2];

    let headers = headersLine.split('\r\n');

    this.statusCode = statusCode;
    this.statusMessage = statusMessage;
    this.headers = {};
    
    for( let index in headers){
        let headerValue = headers[index].split(':');
        if(headerValue.length === 2){
            this.headers[headerValue[0]] = headerValue[1].replace(' ','');
        }
    }

    this.body = bodyLine;
}

Response.prototype.statusCode = this.statusCode;
Response.prototype.statusMessage = this.statusMessage;
Response.prototype.headers = this.headers;
Response.prototype.body = this.body;


module.exports=Response;