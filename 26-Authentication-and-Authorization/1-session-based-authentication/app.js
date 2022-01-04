//import modules
const express = require("express")
const cookieParser = require("cookie-parser");
const sessions = require("express-session");

// inisiasi app
const app = express()
// insiasi port
const port = 3000

// set cookies to 1 minutes (60000 miliseconds)
const oneMinute = 60000;

//session middleware
app.use(
    sessions({
      secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
      saveUninitialized: true,
      cookie: { maxAge: oneMinute },
      resave: false,
    })
);

app.use(express.json());
app.use(express.static("views"))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

// Dummy credential & session data
const myusername = 'user1';
const mypassword = 'mypassword';

var session;

app.get("/", (req, res) => {
    session = req.session;
    if(session.userid === username){
        const message = `<h1>Hello, ${session.userid} </h1> <br> <h2> Already Login </h2> `
        res.send(message)
    } else{
        res.sendFile("views/index.html", {root: "views"});
    }
})

app.get("/user", (req,res)=> {
    session = req.session;
    console.log(session);
    if(session.userid === myusername){
        const message =  `
        <h1>Hello, ${session.userid} welcome !<h1> 
        <h2>Session Id, ${session.id}<h2>
        <a href=\'/logout'>click to logout</a>
        `
        res.send(message);
    } else {
        const message = `<h1> forbidden user </h1>`
        res.send(message)
    }
})

app.post("/user", (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const session = req.session;

   if (username == myusername && password == mypassword) {
        session.userid = username;
        const message =  `
        <h1>Hello, ${session.userid} welcome !<h1> 
        <h2>Session Id, ${session.id}<h2>
        <a href=\'/logout'>click to logout</a>
        `
        res.send(message);
      } else {
        res.send("Unauthenticated user");
      }

})

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

app.listen(port, () => {
    console.log("App is runinng on", port)
})




// // console.log("hello world")

