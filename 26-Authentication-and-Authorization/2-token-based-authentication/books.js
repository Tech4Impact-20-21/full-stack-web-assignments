//import modules
const express = require("express")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const dotenv = require("dotenv");


//inisiasi app
const app = express()
const port = 4000

dotenv.config();
app.use(bodyParser.json())


const books = [
    {
      "author": "Robert Martin",
      "country": "USA",
      "language": "English",
      "pages": 209,
      "title": "Clean Code",
      "year": 2008
    },
    {
      "author": "Dave Thomas & Andy Hunt",
      "country": "USA",
      "language": "English",
      "pages": 784,
      "title": "The Pragmatic Programmer",
      "year": 1999
    },
    {
      "author": "Kathy Sierra, Bert Bates",
      "country": "USA",
      "language": "English",
      "pages": 928,
      "title": "Head First Java",
      "year": 2003
    },
];

// Middleware
const authenticateJWT = (req, res, next) => {
    // menangkap request client dengan authorizationnya (token)
    const authHeader = req.headers.authorization;

    if (authHeader) {
        // mengambil token saja
        const accessToken = authHeader.split(' ')[1];

        jwt.verify(accessToken, process.env.accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

//routes
//test
app.get("/", (req,res)=>{
    console.log("server is ready")
    res.send("server is ready")
})

app.get("/books", authenticateJWT, (req, res) => {
    console.log(req.user);
    res.json(books);
});

app.post("/books", authenticateJWT, (req, res) => {
    const { role } = req.user;
    console.log(req.user);

    if (role !== "admin") {
        return res.sendStatus(403);
    }

    const book = req.body;
    books.push(book);

    res.send({
        message: "Book added successfully",
        books: books
    });
});



app.listen(port, ()=>{
    console.log("server is listening on port", port)
})