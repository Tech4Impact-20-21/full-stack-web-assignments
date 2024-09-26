const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const PORT = 3000
const app = express();

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

dotenv.config();
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const {username, password} = req.body;

    const user = users.find(user => {
        return (user.username === username) && (user.password === password)
    });

    if(user){
        const token = jwt.sign({
            username: user.username,
            role: user.role
        },
            process.env.accessTokenSecret
        )
        res.json({ token });
    }else{
        res.send("Username or password incorrect");
    }
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})