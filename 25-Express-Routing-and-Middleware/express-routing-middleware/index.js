const express = require('express')
const app = express()
app.use(express.json())

/** Data */
const hewan = [
    {id: 1, nama: 'Snowy', spesies: 'kucing'},
    {id: 2, nama: 'Blacki', spesies: 'anjing'},
    {id: 3, nama: 'Molly', spesies: 'kucing'},
    {id: 4, nama: 'Milo', spesies: 'kelinci'},
    {id: 5, nama: 'Rere', spesies: 'kucing'},
  ]

/** Jawaban 02 */
function logger(req, res, next) {
    console.log("This is logger")
    next()
}

function speciesChecker(req, res, next) {
    const spesies = ["kucing", "anjing", "kelinci"]
    const cek = spesies.includes(req.body.spesies)

    if(cek)
    {
        next()
    } else {
        res.status(400).send({
            message: "Spesies tidak valid"
        })
    }
}

/** Jawaban 01 */
app.get('/hewan', logger, (req, res) => {
    res.send({
        message: "Berhasil mengambil data Pet",
        hewan: hewan
    })
})

app.post('/hewan', logger, speciesChecker, (req, res) => {
    const last_id = hewan[hewan.length - 1].id
    const data = {
        id: last_id + 1,
        nama: req.body.nama,
        spesies: req.body.spesies
    }

    hewan.push(data)
    res.send({
        message: "Data berhasil ditambahkan",
        data: data
    })
})

app.get('/hewan/:id', logger, (req, res) => {
    const id = req.params.id
    const data = hewan.find((hewan) => hewan.id == id)

    if(data)
    {
        res.send({
            message: `Berhasil mendapatkan hewan dengan id ${id}`,
            hewan: data
        })
    } else {
        res.status(404).send({
            message: `Tidak ada hewan dengan id ${id}`
        })
    }
})

app.put('/hewan/:id', logger, (req, res) => {
    const id = req.params.id
    const index = hewan.findIndex(hewan => hewan.id == id)

    if(index != -1)
    {
        hewan[index].nama = req.body.nama
        hewan[index].spesies = req.body.spesies
    
        const updated_data = hewan.find((hewan) => hewan.id == id)
    
        res.send({
            message: "Berhasil memperbarui data",
            updated_data: updated_data
        })
    } else {
        res.status(404).send({
            message: `Tidak ada hewan dengan id ${id}`
        })
    }
})

app.delete('/hewan/:id', logger, (req, res) => {
    const id = req.params.id
    const index = hewan.findIndex(hewan => hewan.id == id)

    if(index != -1)
    {
        hewan.splice(index, 1)
        res.send({
            message: "Data berhasil dihapus",
            hewan: hewan
        })
    } else {
        res.status(404).send({
            message: `Tidak ada hewan dengan id ${id}`
        })
    }
})

/** Server */
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});