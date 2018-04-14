const server = require("./server");
const router = require("./router");

server.start(router.route); //we are referring back to our server.js and 
                //calling our start function.

                