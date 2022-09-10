const express = require("express");
const router = express.Router();
const poohController = require("../controllers/pooh");

//Main Routes - simplified for now
router.get("/", poohController.getIndex);
router.get("/api", poohController.getPooh);

module.exports = router;
