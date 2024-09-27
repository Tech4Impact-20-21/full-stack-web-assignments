const express = require("express")
const expressSession = require("express-session")
const cookieParser = require("cookie-parser")

const app = express()
const port = 3000;
const cookie = 60000;

app.use(express.urlencoded({extended: true}))
app.use(express.static('views'))
app.use(express.json())
app.use(expressSession({
    secret: "asdfghjkl",
    saveUninitialized: true,
    cookie: {maxAge: cookie},
    resave: false
}))
app.use(cookieParser())
//dummy data
const myusername = 'user1'
const mypassword = 'mypassword'

var session;

app.get("/", (req, res) => {
    session = req.session;
    if(session.userid === username) {
        res.send("welcom user <a href='/logout'>Click to logout</a>")
    } else {
        res.sendFile("views/index.html", {root: "views"})
    }
})

app.get("/user", (req, res) => {
    session = req.session;
    if(session.userid === myusername) {
        res.send(`<h1> Hello, ${req.session.userid} welcome <a href=\ '/logout'>Click to logout</a></h1>
                    <h2>Session id ${req.session.id}</h2>`)
    } else {
        res.send(`<h1>Please login first <a href=\ '/'>click to login</a></h1>`)
    }
})

app.post("/user", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const requestSession = req.session;
    
    if (username == myusername && password == mypassword) {
        requestSession.userid = req.body.username;
        res.send(`<h1> Hello, ${req.session.userid} welcome <a href=\ '/logout'>Click to logout</a></h1>
                    <h2>Session id ${req.session.id}</h2>`)
    } else {
        res.send("Unauthenticated user");
    }
})

app.get("/logout", (req,res) => {
    req.session.destroy();
    res.redirect("/")
})

app.listen(port, () => 
    console.log(`server running in port ${port}`)
    )