'use strict';

/**
 *
 * @param url
 * @param options
 * @constructor
 */
function Request(url,options) {
    this.url = url
    this.method=options.method?options.method:'GET';
    this.headers = options.headers?options.headers:{};
}

Request.prototype.write = function(data) {
    this.data = data;
}

Request.prototype.toText = function () {

    let firstLine = this.method.toLocaleUpperCase() + ' ' + this.url + ' HTTP/1.1';
    let headersText = '';
    for (let key in this.headers){
        headersText+=key+': '+this.headers[key]+'\r\n';
    }
    return firstLine+'\r\n'+headersText+'\r\n'+this.data;
}


module.exports=Request;