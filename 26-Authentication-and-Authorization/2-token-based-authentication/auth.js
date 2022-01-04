//import modules
const express = require("express")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const dotenv = require("dotenv");


//inisiasi app
const app = express()
const port = 3000

//middleware
dotenv.config();
app.use(bodyParser.json())

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

//routes
//test
app.get("/", (req,res)=>{
    console.log("server is ready")
    res.send("server is ready")
})

app.post("/login", (req,res) => {
    const username = req.body.username
    const password = req.body.password

    console.log(username,password)

    const user = users.find(u => { return (u.username === username) && (u.password === password)})
    
    if(user) {

        const accessToken = jwt.sign({username: user.username,  role: user.role}, process.env.accessTokenSecret)
        res.json({
            accessToken
        })
    } else {
        res.send("username or password incorrect")
    }
})

app.get("/users", (req,res)=>{
    res.json(users)
})


app.listen(port, ()=>{
    console.log("server is listening on port", port)
})