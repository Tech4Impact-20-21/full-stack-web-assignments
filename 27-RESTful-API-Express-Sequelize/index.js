const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const Port = process.env.PORT || 3000;
const Sequalize = require("sequelize");
const app = express();
const { Hewan } = require("./models/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sequalize = new Sequalize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

sequalize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .then(() => {
    Hewan.sync().then(() => {
      console.log("table Hewan created");
    });
  })
  .catch((err) => {
    console.log("Unable to connect to the database", err);
  });


app.get("/hewan", (req, res) => {
  Hewan.findAll().then((result) => {
    res.json({
      data: result,
    });
  });
});

app.get("/hewan/:id", (req, res) => {
  const hewanId = req.params.id;
  const hewanGet = Hewan.findOne({
    where: {
      id: hewanId,
    },
  })
    .then((result) => {
      res.send({
        result,
      });
    })
    .catch((err) => {
      res.send({
        msg: err.message,
      });
    });
});

app.post("/hewan", async (req, res) => {
  const body = req.body;
  const hewan = {
    nama: body["nama"],
    namaSpesies: body["namaSpesies"],
    umur: body["umur"],
  };

  try {
    await Hewan.create(hewan);
    res.status(201).send({
      msg: "Success Created",
      data: hewan,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.put("/hewan/:id", async (req, res) => {
  try {
    const hewanId = req.params.id;
    const body = req.body;
    const hewan = {
      nama: body["nama"],
      namaSpesies: body["namaSpesies"],
      umur: body["umur"],
    };

    await Hewan.update(hewan, {
      where: {
        id: hewanId,
      },
    });

    res.status(200).json({
      msg: "Update Success",
    });
  } catch (error) {
    res.status(500).send({
      msg: error,
    });
  }
});

app.delete("/hewan/:id", (req, res) => {
  const hewanId = req.params.id;
  const hewanGet = Hewan.destroy({
    where: {
      id: hewanId,
    },
  })
    .then((result) => {
      res.send({
        msg: "Delete Success",
      });
    })
    .catch((err) => {
      res.send({
        msg: err.message,
      });
    });
});

app.listen(Port, () => {
  console.log("Server is Running on", Port);
});
