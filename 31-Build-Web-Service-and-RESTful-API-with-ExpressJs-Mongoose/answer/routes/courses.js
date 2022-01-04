module.exports = (app) => {
  const courses = require("../controllers/courses");
  const router = require("express").Router();

  // Create a new courses
  router.post("/", courses.create);

  // Retrieve all courses
  router.get("/", courses.findAll);

  // Retrieve a single courses with id
  router.get("/:id", courses.findOne);

  // Update a courses with id
  router.put("/:id", courses.update);

  // Delete a courses with id
  router.delete("/:id", courses.delete);

  app.use("/courses", router);
};
