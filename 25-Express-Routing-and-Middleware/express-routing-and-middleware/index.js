//import module
const express = require('express')
const app = express()


const hewan = [
  {id: 1, nama: 'Snowy', spesies: 'kucing'},
  {id: 2, nama: 'Blacki', spesies: 'anjing'},
  {id: 3, nama: 'Molly', spesies: 'kucing'},
  {id: 4, nama: 'Milo', spesies: 'kelinci'},
  {id: 5, nama: 'Rere', spesies: 'kucing'},
]

//middleware
app.use(express.json());
app.use(function (req, res, next) {
    res.status(200);
    console.log("this is logger");
    next();    
});

const postChecker = function (req, res, next) {
    const species = req.body.spesies;

    if(species === "kucing" || species ==="anjing" || species === "kelinci") {
        res.status(201);
        next();
    } else {
        next(
        res.status(404).send({error: "Species not valid"})
        );
    };
    
}

//router
app.get('/hewan', (req, res) => {
    //menampilkan semua hewan
    res.status(200).send({message: "success get data pet", 
    hewan: hewan})
})

app.post('/hewan',postChecker, (req, res) => {
    //menambah array hewan
    const body = req.body;
    const hewanBaru = {id: hewan.length + 1, nama: body["nama"], spesies: body["spesies"]};
    hewan.push(hewanBaru)
    res.status(200).send({
        message: "success adding one pets",
        hewan: hewan
    })
})

app.get('/hewan/:id', (req, res) => {
    //menampilkan semua hewan ketika hewan/1 id satu muncul
    const {id} = req.params
    const hewanById = hewan.find(p => p.id == id)
    res.status(200).send({message: "success get data pet", 
    hewanFilter: [hewanById]})
})

app.put('/hewan/:id', (req, res) => {
    //mengupdate satu data sesuai dengan id semua hewan
    const {id} = req.params
    const hewanById = hewan.find(p => p.id == id)
    //ambil data dari body
    const {nama, spesies} = req.body;
    hewanById.nama = nama;
    hewanById.spesies = spesies;
    res.status(200).send({message: `success update pet by id: ${id}`,
                            hewan: hewan})
})

app.delete('/hewan/:id', (req, res) => {
    //menghapus satu data hewan sesuai id
    const {id} = req.params
    const deleteHewanById = hewan.findIndex(p => p.id == id)
    hewan.splice(deleteHewanById, 1)
    res.status(200).send({message: `success delete pet by id: ${id}`, 
hewan: hewan})
})


app.listen(3000, () => {
    console.log("App is running on port 3000")
})