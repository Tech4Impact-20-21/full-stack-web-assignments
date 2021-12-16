const express = require("express");
const Sequelize = require("sequelize");

const app = express();
const HEWAN = require("./models").hewan;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;


// Connect and check database
const sequelize = new Sequelize('db_pet', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

async function checkConnection() {
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.')
      HEWAN.sync().then(() => console.log('table Created'))
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
}

checkConnection()

app.get("/hewan", async (req, res) => {
  await HEWAN.findAll().then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send({message: error});
    })
})

app.get("/hewan/:id", async (req, res) => {
  const hewanID = req.params.id;
  await HEWAN.findOne({
    where: {
      id: hewanID,
    },
  })
    .then((result) => {res.send(result)})
    .catch((error) => {res.send({message: error})
    })
})

app.post("/hewan", async (req, res) => {
  const body = req.body;
  const hewan = {
    nama: body["nama"],
    namaSpesies: body["namaSpesies"],
    umur: body["umur"],
  }

  try {
    await HEWAN.create(hewan)
    res.status(201).send(hewan)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})

app.put("/hewan/:id", async (req, res) => {
  try {
    const hewanID = req.params.id;
    const body = req.body;
    const hewan = {
      nama: body["nama"],
      namaSpesies: body["namaSpesies"],
      umur: body["umur"],
    }

    await HEWAN.update(hewan, {
      where: {id: hewanID},
    })
    res.status(200).send(hewan);
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})

app.delete("/hewan/:id", async (req, res) => {
  try {
    const hewanID = req.params.id;
    await HEWAN.destroy({
      where: {
        id: hewanID,
      },
    })

    res.status(200).json({message: "Hewan wasa deleted successfully!"})
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

app.listen(port, () => {
  console.log("Server is running on port", port);
})