const express = require("express");

const router = express.Router();
const {validateToken} = require("../middlewares/auth.js");
const {index, create} = require("../controllers/order.controller.js");

router.get("/", validateToken, index);
router.post("/", validateToken, create);

module.exports = router