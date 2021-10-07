const express = require("express");
const BotController = require('../controllers/BotController');
let router = express.Router();

router.get("/", BotController.getHomePage);

module.exports = router;