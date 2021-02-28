const express = require("express");

const router = express.Router();

const genresController = require("../controllers/genres.controller");

router.post("/", genresController.createGenre);
router.get("/", genresController.getAllGenres);
router.get("/:id", genresController.getSingleGenre);
router.put("/:id", genresController.updateGenre);
router.put("/:id", genresController.deleteGenre);

module.exports = router;