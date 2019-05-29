# welcome use httpSerialize

------

HTTP protocal is based on plain text, so we write this library to transform Plain-Text to Request&Response Object.You can serialize the request object to plain text and converse.

The Request&Response Object is same to nodejs HTTP buildin object which in website :

> * [nodejs-HTTP](https://nodejs.org/dist/latest-v10.x/docs/api/http.html)

The source code of this library is very simple, and you can use it easily!

##Usage


``` js

```

##API
> *  requestToText(req,callback)

convert request{incomingMessage} to Text

> *  clientResponseToText(response,callback)

convert client response{incomingMessage} to Text

> *  textToClientRequest(text,callback)

convert text to client request.Text is plain text in http format

> *  textToHttpsClientRequest(text,callback)

convert text to client request.Text is plain text in http format.
This function return https req

> *  textToResponse(text, resp)

convert plain to resp(HTTP.response) which create by you. When you use this function, it will put headers (and other info) to resp, and call resp.end() to send response.

> *  textIsRequest(text)

judge the text is request or response.

> *  Request(url,options)
> *  Request.write(data)
> *  Request.toText()

Object in this lib, and you can create it first, then use write function to put in body, at last get text with toText function

> *  Response(text)
> *  Response.statusCode
> *  Response.statusMessage
> *  Response.headers
> *  Response.body

Object in this lib, and you can create it first, then get statusCode etc.

> *  textGetHeaders(text)

Get headers from Plain-Text which in http format