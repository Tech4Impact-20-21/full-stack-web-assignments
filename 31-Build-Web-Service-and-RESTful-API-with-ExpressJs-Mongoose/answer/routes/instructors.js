module.exports = (app) => {
  const instructors = require("../controllers/instructors");
  const router = require("express").Router();

  // Create a new instructors
  router.post("/", instructors.create);

  // Retrieve all instructors
  router.get("/", instructors.findAll);

  // Retrieve a single instructors with id
  router.get("/:id", instructors.findOne);

  // Update a instructors with id
  router.put("/:id", instructors.update);

  // Delete a instructors with id
  router.delete("/:id", instructors.delete);

  app.use("/instructors", router);
};
