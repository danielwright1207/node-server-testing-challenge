// build your `/api/projects` router here
const express = require("express");
const Projects = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allProjects = await Projects.find();
    res.status(200).json(allProjects);
    console.log(res.body, "here");
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const data = await Projects.getById(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await Projects.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
