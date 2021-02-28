const express = require("express");

const router = express.Router();

const authorsController = require("../controllers/authors.controller");

/* GET users listing. */

router.post("/", authorsController.createAuthor);
router.get("/", authorsController.getAllAuthors);
router.get("/:id", authorsController.getSingleAuthor);
router.put("/:id", authorsController.updateAuthor);
router.put("/:id", authorsController.deleteAuthor);

module.exports = router;