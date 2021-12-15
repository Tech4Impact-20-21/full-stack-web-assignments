// Import modules
const express = require("express");
const { Sequelize, DataTypes, Model } = require("sequelize");

// Configure database
const sequelize = new Sequelize(
    "db_hewan", 
    "root", 
    "MySQL@0707",
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

// Define model
const Hewan = sequelize.define('Hewan', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    namaSpesies: {
        type: DataTypes.STRING,
        allowNull: false
    },
    umur: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

// Connect to database
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .then(() => {
        Hewan
            .sync()
            .then(() => console.log('table Hewan created'))
            .catch(err => {
                console.error('Unable to create the table:', err);
            });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Initiate app
const app = express();

// Middleware
app.use(express.json());

// Add routes
app.get("/hewan", (req, res) => {
    Hewan.findAll()
        .then(result => {
            res.send(result)
        })
        .catch(error => res.send(error))
})

app.get("/hewan/:idHewan", (req, res) => {
    Hewan.findOne({
        where: {
            id: req.params.idHewan
        }
    })
        .then(result => {
            res.send(result)
        })
        .catch(error => res.send(error))
})

app.post("/hewan", async(req, res) => {
    const body = req.body;
    const hewan = {
        nama: body['nama'],
        namaSpesies: body['namaSpesies'],
        umur: body['umur']
    }

    try{
        await Hewan.create(hewan)
        res.send(hewan)
    } catch(error) {
        res.status(500).send({
            message: error.message
        })
    }
})

app.put("/hewan/:idHewan", async(req, res) => {
    const body = req.body;
    const hewan = {
        nama: body['nama'],
        namaSpesies: body['namaSpesies'],
        umur: body['umur']
    }

    try{
        await Hewan.update(hewan, {
            where: {
                id: req.params.idHewan
            }
        })
        res.send(hewan)
    } catch(error) {
        res.status(500).send({
            message: error.message
        })
    }
})

app.delete("/hewan/:idHewan", async(req, res) => {
    try{
        await Hewan.destroy({
            where: {
                id: req.params.idHewan
            }
        })
        res.send({
            message: "Hewan was deleted successfully"
        })
    } catch(error) {
        res.status(500).send({
            message: error.message
        })
    }
})

// Start server
app.listen(3000, () => {
    console.log("Listening to port 3000")
})