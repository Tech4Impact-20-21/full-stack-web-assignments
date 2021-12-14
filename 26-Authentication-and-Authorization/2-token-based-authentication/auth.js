const express = require("express")
const jsonwebtoken = require("jsonwebtoken")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")

const app = express()
app.use(bodyParser.json())
dotenv.config()
const port = 3000;

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


app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((u) => {
        return( u.username === username && u.password === password)
    })

    if (user){
        const token = jwt.sign({username: user.username, role: user.role},
            process.env.SECRET_TOKEN)
        res.json({token})
    } else {
        res.send("Username or password incorrect")
    }
})

app.listen(port, () => 
    console.log(`server running in port ${port}`)
    );