const express = require("express");
const router = express.Router();
const poohController = require("../controllers/pooh");

//Main Routes - simplified for now
router.get("/", poohController.getIndex);
router.get("/api", poohController.getAll);
router.get("/random", poohController.getRandom);
router.get('/api/tigger:tigger', poohController.piglet);
router.get("/api/:query", poohController.getPooh);

module.exports = router;
