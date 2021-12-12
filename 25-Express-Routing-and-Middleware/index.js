const express = require("express");
const multer = require("multer");
const logger = (req, res, next) => {
    console.log("This is logger");
    next();
}
const PORT = 3000

const postChecker = (req, res, next) => {
    const body = req.body;
    const spesies = ["anjing", "kucing", "kelinci"];
    if(spesies.includes(body.spesies.toLowerCase())){
        next();
    }else{
        res.status(400).send({
            error: "Species not valid"
        });
    }
}

let hewan = [
    {id: 1, nama: 'Snowy', spesies: 'kucing'},
    {id: 2, nama: 'Blacki', spesies: 'anjing'},
    {id: 3, nama: 'Molly', spesies: 'kucing'},
    {id: 4, nama: 'Milo', spesies: 'kelinci'},
    {id: 5, nama: 'Rere', spesies: 'kucing'},
]

const app = express();

app.use(multer().none());
app.use(logger);

app.get("/hewan", (req, res) => {
    res.status(200).send({
        message: "success get data Pet",
        hewan: hewan
    });
})

app.get("/hewan/:id", (req, res) => {
    const id = Number(req.params.id);
    res.status(200).send({
        message: "success get data Pet",
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
        message: "success adding one pets",
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

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})