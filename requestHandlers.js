// const exec = require("child_process").exec; //exec executes a shell command from within Node.
const querystring = require("querystring");
const fs = require("fs");

function start(response, postData) {
    console.log("Request handler 'start' was called.");
    // let content = "empty";

    let body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; '+
        'chartset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();
   
    // return content;
}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent the text: " +
    querystring.parse(postData).text);
    response.end();
}

function show(response) {
    console.log("Request handler 'show' was called.");
    response.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream("./tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;