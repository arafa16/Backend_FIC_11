const express = require("express");

const router = express.Router();
const {validateToken} = require("../middlewares/auth.js");
const {index} = require("../controllers/book.controller.js");

router.get("/", validateToken, index);

module.exports = router