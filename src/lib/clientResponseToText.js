'use strict';

/**
 * convert response to plain text
 * @param resp {http.response}
 */
function clientResponseToText(resp,callback) {
    let firstLine = 'HTTP/'+resp.httpVersion + ' '+ resp.statusCode + ' ' + resp.statusMessage;

    let headersText = '';
    for (var key in resp.headers){
        headersText += key +': '+resp.headers[key]+'\r\n';
    }

    let bodyText  = '';
    resp.on('data', function (chunk) {
        bodyText += chunk;
    });
    resp.on('end', function () {
        callback(null,firstLine+'\r\n'+headersText+'\r\n'+bodyText);
    });
}

module.exports=clientResponseToText;