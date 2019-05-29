'use strict';
const request = require('http').request;
const textGetHeaders = require('./textGetHeaders');
const {URL} = require('url');
const httpsRequest = require('https').request;

/**
 * convert text to request
 *
 * @param text {plain text in http format}
 * @param callback {function(err,incomingMessage)}
 */
function textToClientRequest(text,callback) {
    let headerBeginIndex = text.indexOf('\r\n');
    let headerEndIndex = text.indexOf('\r\n\r\n');

    let firstLine = text.slice(0,headerBeginIndex);
    let headersLine = text.slice(headerBeginIndex+2,headerEndIndex);
    let bodyLine = text.substr(headerEndIndex+4);

    let method = firstLine.split(' ')[0];

    let url = firstLine.split(' ')[1];
    let urlObj = new URL(url);
    let httpVersion = firstLine.split(' ')[2].substr(5);// HTTP/1.1 to 1.1

    let headers = headersLine.split('\r\n');

    const options = {
        hostname: urlObj.hostname,
        port: urlObj.port,
        path: urlObj.pathname + '?'+ urlObj.searchParams.toString(),
        method: method,
    };

    //let req = request(url,{method:method},callback);
    let req = request(options,(resp)=>{
        callback(null,resp)
    });
    for( let index in headers){
        let headerValue = headers[index].split(':');
        let firstSapratorIndex = headers[index].indexOf(':');
        if(headerValue.length >= 2) {
            req.setHeader(headerValue[0], headers[index].substr(firstSapratorIndex+1).replace(' ', ''));
        }
    }
    req.write(bodyLine);
    req.on('error',(e)=>{
        callback(e,null)
    });
    req.end()

    return req;
}

/**
 * convert text to https request
 *
 * @param text {plain text in http format}
 * @param callback {function(err,incomingMessage)}
 */
function textToHttpsClientRequest(text,callback) {
    let headerBeginIndex = text.indexOf('\r\n');
    let headerEndIndex = text.indexOf('\r\n\r\n');

    let firstLine = text.slice(0,headerBeginIndex);
    let headersLine = text.slice(headerBeginIndex+2,headerEndIndex);
    let bodyLine = text.substr(headerEndIndex+4);

    let method = firstLine.split(' ')[0];

    let url = firstLine.split(' ')[1];
    let urlObj = new URL(url);
    let httpVersion = firstLine.split(' ')[2].substr(5);// HTTP/1.1 to 1.1

    let headers = headersLine.split('\r\n');

    const options = {
        hostname: urlObj.hostname,
        port: urlObj.port,
        path: urlObj.pathname + '?'+ urlObj.searchParams.toString(),
        method: method,
        rejectUnauthorized: false,
    };

    //let req = request(url,{method:method},callback);
    let req = httpsRequest(options,(resp)=>{
        callback(null,resp)
    });
    for( let index in headers){
        let headerValue = headers[index].split(':');
        let firstSapratorIndex = headers[index].indexOf(':');
        if(headerValue.length >= 2) {
            req.setHeader(headerValue[0], headers[index].substr(firstSapratorIndex+1).replace(' ', ''));
        }
    }
    req.write(bodyLine);
    req.on('error',(e)=>{
        callback(e,null)
    });
    req.end()

    return req;
}

module.exports.textToClientRequest = textToClientRequest;
module.exports.textToHttpsClientRequest = textToHttpsClientRequest;
