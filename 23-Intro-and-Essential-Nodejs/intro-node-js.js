const http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    let url = req.url;

    if(url === '/about'){
        res.write('Welcome to about us page');
        res.end();
    } else if(url === '/contact'){
        res.write('Welcome to contact us page');
        res.end();
    } else {
        res.write('Hello world');
        res.end();
    }
}).listen(8000);