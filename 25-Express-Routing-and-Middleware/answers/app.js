// Import modules
const express = require("express");

// Import middlewares
const multer = require("multer");
const logger = (req, res, next) => {
    console.log("This is logger");
    next();
}
const postChecker = (req, res, next) => {
    const body = req.body;
    const spesies = ["anjing", "kucing", "kelinci"];
    if(spesies.includes(body.spesies.toLowerCase())){
        next();
    }else{
        res.status(400).send({
            error: "Invalid spesies"
        });
    }
}

// Dataset
let hewan = [
    {id: 1, nama: 'Snowy', spesies: 'kucing'},
    {id: 2, nama: 'Blacki', spesies: 'anjing'},
    {id: 3, nama: 'Molly', spesies: 'kucing'},
    {id: 4, nama: 'Milo', spesies: 'kelinci'},
    {id: 5, nama: 'Rere', spesies: 'kucing'},
]

// Initiate app
const app = express();

// Use middleware
app.use(multer().none());
app.use(logger);

// Add routes
app.get("/hewan", (req, res) => {
    res.status(200).send({
        message: "Successfully get pet data",
        hewan: hewan
    });
})

app.get("/hewan/:id", (req, res) => {
    const id = Number(req.params.id);
    res.status(200).send({
        message: "Successfully get pet data",
        hewanFilter: hewan.filter((hewan) => hewan.id === id)
    });
})

app.post("/hewan", postChecker, (req, res) => {
    const body = req.body;
    hewan.push({
        id: hewan.length+1,
        nama: body.nama,
        spesies: body.spesies
    });
    res.status(200).send({
        message: "Successfully add one pet data",
        hewan: hewan
    });
})

app.put("/hewan/:id", (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const idArray = hewan.findIndex((hewan) => hewan.id == id);
    hewan[idArray].nama = body.nama;
    hewan[idArray].spesies = body.spesies;
    res.status(200).send({
        message: "Successfully update one pet data",
        hewan: hewan
    })
})

app.delete("/hewan/:id", (req, res) => {
    const id = Number(req.params.id);
    hewan = hewan.filter((hewan) => hewan.id !== id);
    res.status(200).send({
        message: "Successfully delete one pet data",
        hewan: hewan
    })
})

// Start server
app.listen(3000, () => {
    console.log("Listening to port 3000");
})