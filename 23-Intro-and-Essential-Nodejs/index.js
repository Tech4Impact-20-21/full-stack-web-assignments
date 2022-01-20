// import http build-in module
const http = require('http');

// create a server object
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});

    if (req.url == '/about') {
        res.write('Welcome to about us page');
    }
    else if(req.url == '/contact') {
        res.write('Welcome to contact us page');
    } else {
        res.write('Hello World');
    }

    res.end();
}).listen(8080);