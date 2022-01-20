const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('views'))
app.use(cookieParser())

/** Konfigurasi session */
app.use(session({
    secret: '3E0boYAeM4lmquxvbGNl',
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
    resave: false
}))

/** Dummy data */
const myusername = 'user1'
const mypassword = 'mypassword'

var sessionReq;

/** Routes */
app.get('/', (req, res) => {
    sessionReq = req.session
    console.log(sessionReq)

    if(sessionReq.username == myusername) {
        console.log(sessionReq.username)
        res.redirect('/user')
    } else {
        res.sendFile('views/index.html')
    }
})

app.get('/user', (req, res) => {
    sessionReq = req.session
    console.log(sessionReq)

    if(sessionReq.username == myusername) {
        const message = `
        <p>Halo, ${sessionReq.username}</p>
        <p>Session ID: ${sessionReq.id}</p>
        <a href='/logout'>Keluar</a>
        `
        res.send(message)
    } else {
        res.redirect('/')
    }
})

app.post('/user', (req, res) => {
    sessionReq = req.session
    const username = req.body.username
    const password = req.body.password

    if(username == myusername && password == mypassword) {
        req.session.username = username
        res.redirect('/user')
    } else {
        const message = `<p>User tidak terautentikasi</p>`
        res.send(message)
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

/** Server */
app.listen(3000, ()=> {
    console.log('Server listen to 3000')
})