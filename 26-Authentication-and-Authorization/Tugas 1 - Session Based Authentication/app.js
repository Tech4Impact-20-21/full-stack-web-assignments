const express = require("express");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const { append } = require("express/lib/response");
const PORT = 3000
const app = express();
const oneMinute = 60 * 1000;

app.use(
    expressSession({
        secret: "thisismysecretkey",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: oneMinute
        }
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));
app.use(cookieParser());

const myusername = 'user1';
const mypassword = 'mypassword';
let session;

app.get("/", (req, res) => {
    session = req.session;
    if(session.userid){
        res.send(`Welcome! <a href=\'/logout'>Log out</a>`);
    }else{
        res.sendFile("views/index.html", {root: "views"});
    }
})

app.post("/user", (req, res) => {
    const body = req.body;
    if(body.username === myusername && body.password === mypassword){
        session = req.session;
        session.userid = body.username;
        console.log(req.session)
        res.send(`Welcome, ${body.username}! <a href=\'/logout'>Log out</a>`)
    } else {
        res.send("Invalid username or password");
    }
})

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})