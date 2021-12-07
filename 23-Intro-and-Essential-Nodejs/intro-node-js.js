// Import modules
const http = require('http');

// create server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    const url = req.url
    if (url === "/about") {
        res.write("Welcome to about us page")
        res.end();
    }
    else if (url === "/contact") {
      res.write("Welcome to contact us page")
      res.end();
    }
    else {
      res.write("Hello world");
      res.end();
    }
    
  });
  
  //port inialisasi
  const port = 8000;

  //jalankan server

  server.on("listening", () => {
    console.log(`server is listening on port ${port}`);
  });
  

  server.listen(port);

//close server
//   function closeServer() {
//     server.close();
//     console.log("server is closed")
//   };
  
//   setTimeout(closeServer,23000);