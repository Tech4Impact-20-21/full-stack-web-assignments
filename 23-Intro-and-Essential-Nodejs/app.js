const http = require("http");

const server = http.createServer(function (req, res){
    console.log(req.url);
    if (req.url === "/about") {
        res.write("Welcome to about us page");
        res.end();
    } else if (req.url === "/contact") {
        res.write("Welcome to contact us page");
        res.end();
    } else {
        res.write("Hello world");
        res.end();
    }
});

server.listen(8000);
console.log('Server is running on port 8000');