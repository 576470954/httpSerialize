'use strict';

/**
 * convert request to plain text
 * @param req {IncomingMessage}
 */
function requestToText(req,callback) {
    let firstLine = req.method + ' ' + req.url + ' HTTP/' + req.httpVersion;
    /*let headersText = req.rawHeaders.reduce((total,currentValue,currentIndex)=>{
        if(currentIndex === 0){
            return total + currentValue;
        }else if(currentIndex % 2 === 1) {
            return total + ': '+currentValue;
        }else {
            return total + '\r\n' + currentValue;
        }
    },'')*/
    let headersText = '';
    for (var key in req.headers){
        headersText += key +': '+req.headers[key]+'\r\n';
    }
    let bodyText  = '';
    req.on('data', function (chunk) {
        bodyText += chunk;
    });
    req.on('end', function () {
        callback(null,firstLine+'\r\n'+headersText+'\r\n'+bodyText);
    });
}

module.exports=requestToText;