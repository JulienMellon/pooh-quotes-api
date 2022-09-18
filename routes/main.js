const express = require("express");
const router = express.Router();
const poohController = require("../controllers/pooh");

//Main Routes - simplified for now
router.get("/", poohController.getIndex);
router.get("/api", poohController.getPooh);
router.get("/random", poohController.getRandom);
router.get('/api/:piglet', poohController.piglet)

module.exports = router;