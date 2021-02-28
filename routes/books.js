const express = require("express");

const router = express.Router();

const booksController = require("../controllers/books.controller");

const { loginRequired } = require("../middlewares/authentication");

router.post("/", loginRequired, booksController.createBook);
router.get("/", loginRequired, booksController.getBooks);
router.get("/:id", booksController.getSingleBook);
router.put("/:id", booksController.updateBook);
router.put("/:id", booksController.deleteBook);
router.get("/own", loginRequired, booksController.getMyBooks);

module.exports = router;