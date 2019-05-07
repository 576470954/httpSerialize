'use strict';

var requestToText    = require('./lib/requestToText'),
    clientResponseToText   = require('./lib/clientResponseToText'),
    textToClientRequest    = require('./lib/textToClientRequest'),
    textToResponse   = require('./lib/textToResponse'),
    textIsRequest = require('./lib/textIsRequest'),
    Request   = require('./lib/Request'),
    Response   = require('./lib/Response'),
    textGetHeaders = require('./lib/textGetHeaders');

module.exports = {
    "requestToText"           : requestToText,
    "clientResponseToText"   : clientResponseToText,
    "textToClientRequest"    : textToClientRequest,
    "textToResponse"          : textToResponse,
    "textIsRequest"           : textIsRequest,
    "Request"                  : Request,
    "Response"                 : Response,
    "textGetHeaders"          : textGetHeaders,
};
