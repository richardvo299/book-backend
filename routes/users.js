var express = require('express');
var router = express.Router();
const usersController = require("../controllers/users.controller");
const { loginRequired } = require("../middlewares/authentication");

/* GET users listing. */
router.post("/", usersController.createUser);
router.get("/:id", usersController.getSingleUser);
router.put("/me", loginRequired, usersController.updateProfile);
router.get("/me", loginRequired, usersController.getCurrentUser);

module.exports = router;