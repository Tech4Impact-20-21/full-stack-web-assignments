module.exports = (app) => {
  const participants = require("../controllers/participants");
  const router = require("express").Router();

  // Create a new participants
  router.post("/", participants.create);

  // Retrieve all participants
  router.get("/", participants.findAll);

  // Retrieve a single participants with id
  router.get("/:id", participants.findOne);

  // Update a participants with id
  router.put("/:id", participants.update);

  // Delete a participants with id
  router.delete("/:id", participants.delete);

  app.use("/participants", router);
};
