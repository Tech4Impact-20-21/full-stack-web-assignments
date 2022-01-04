const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
const port = 3000;

/** JWT Authenticate Middleware */
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
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

dotenv.config();
app.use(bodyParser.json());

/** Data user */
const users = [
    {
        username: 'terra',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'dave',
        password: 'password123member',
        role: 'member'
    }
];

/** Data buku */
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

app.get("/", (req, res) => {
    res.send("Server is running");
})

/** Soal auth.js */
app.post("/login", (req, res) => {
    const {username, password} = req.body;

    const user = users.find(u => {return (u.username == username) && (u.password == password)});
    if(user) {
        const token = jwt.sign({username: user.username}, process.env.TOKEN_SECRET);
        res.json({ accessToken: token })
    } else {
        res.send(`User ${username}, gagal masuk`);
    }
})

/** Soal books.js */
app.get("/books", authenticateJWT, (req, res) => {
    res.json(books);
})

app.post("/books", authenticateJWT, (req, res) => {
    const user_login = req.user;
    const user = users.find(u => {return (u.username == user_login.username)});

    const { author, country, language, pages, title, year } = req.body;
    const data = {
        author: author,
        country: country,
        language: language,
        pages: pages,
        title: title,
        year: year
    }

    if(user.role != 'admin')
    {
        res.status(401).json({
            message: "Kamu tidak memiliki hak akses"
        })
    } else {
        books.push(data);
        res.json({
            message: "Data berhasil ditambahkan",
            data: books
        })
    }
})

/** Server */
app.listen(port, () => {
    console.log(`Running in port ${port}`);
})