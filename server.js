const http = require('http');
const url = require("url");

function start() { 
    function onRequest(request, response) { //request and response are two objects we use in our code.
        let pathname = url.parse(request.url).pathname;
        console.log("Request recieved.");
        response.writeHead(200, {"Content-type": "text/plain"});//send HTTP status 200 and content type to HTTP header
        response.write("Hello World");//response.write to send the text "Helo World" to the HTTP body.
        response.end(); //call response.end() to finish our response.
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start; //we can now export our start function "module" to be used elsewhere!

// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }).listen(8888);

//this createServer function could be refactored to look like this.

// function onRequest(request, response) {
//     response.writeHead(200, { "Content-type": "text/plain" });
//     response.write("Hello World");
//     response.end();
// }

// http.createServer(onRequest).listen(8888);

