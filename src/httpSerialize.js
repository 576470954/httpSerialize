'use strict';

var requestToText    = require('./lib/requestToText'),
    clientResponseToText   = require('./lib/clientResponseToText'),
    textToClientRequest    = require('./lib/textToClientRequest').textToClientRequest,
    textToHttpsClientRequest    = require('./lib/textToClientRequest').textToHttpsClientRequest,
    textToResponse   = require('./lib/textToResponse'),
    textIsRequest = require('./lib/textIsRequest'),
    Request   = require('./lib/Request'),
    Response   = require('./lib/Response'),
    textGetHeaders = require('./lib/textGetHeaders');

module.exports = {
    "requestToText"           : requestToText,
    "clientResponseToText"   : clientResponseToText,
    "textToClientRequest"    : textToClientRequest,
    "textToHttpsClientRequest"    : textToHttpsClientRequest,
    "textToResponse"          : textToResponse,
    "textIsRequest"           : textIsRequest,
    "Request"                  : Request,
    "Response"                 : Response,
    "textGetHeaders"          : textGetHeaders,
};
