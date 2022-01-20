const express = require('express');
const Sequelize = require('sequelize');

const app = express()
app.use(express.json())

const sequelize = new Sequelize('impactbyte', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

/** Model */
const Hewan = sequelize.define('hewan', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nama: {
        allowNull: false,
        type: Sequelize.STRING
    },
    namaspesies: {
        allowNull: false,
        type: Sequelize.STRING
    },
    umur: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
})

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.")
    })
    .then(() => {
        Hewan.sync().then(() => console.log("Table Hewan created."))
    })
    .catch((err) => {
        console.log("Unable to conncet", err)
    })

/** Routes */
app.get("/", (req, res) => {
    res.send("Server is running")
})

app.get("/hewan", (req, res) => {
    Hewan.findAll()
        .then(result => {
            res.send(result)
        })
        .catch(error => res.send(error))
})

app.get("/hewan/:id", (req, res) => {
    const id = req.params.id
    Hewan.findOne({
        where: {id: id}
    }).then(result => {
        res.send(result)
    }).catch(error => res.send(error))
})

app.post("/hewan", (req, res) => {
    const {nama, namaspesies, umur} = req.body
    const data = {
        nama: nama,
        namaspesies: namaspesies,
        umur: umur
    }

    Hewan.create(data)
        .then(result => {
            res.send(result)
        })
        .catch(error => res.send(error))
})

app.put("/hewan/:id", (req, res) => {
    const id = req.params.id
    const {nama, namaspesies, umur} = req.body
    const data = {
        nama: nama,
        namaspesies: namaspesies,
        umur: umur
    }

    Hewan.update(data, {
        where: {id: id}
    }).then(result => {
        res.send(result)
    }).catch(error => res.send(error))
})

app.delete("/hewan/:id", (req, res) => {
    const id = req.params.id

    Hewan.destroy({
        where: {id: id}
    }).then(result => {
        res.send({
            message:"Hewan was deleted successfully"
        })
    }).catch(error => res.send(error))
})

/** Server */
app.listen(3000, ()=>{
    console.log("server is listening on", 3000)
})