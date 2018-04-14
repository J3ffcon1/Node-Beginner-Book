const server = require("./server");
const router = require("./router");
const requestHandlers = require("./requestHandlers");

let handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle); //we are referring back to our server.js and 
                //calling our start function.

                