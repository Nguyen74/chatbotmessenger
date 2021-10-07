
const BotController = require('../controllers/BotController');
const router = require('./web');
const web = require('./web');

let initWebRoutes = (app) => {
    app.use("/", web )
    router.get("/webhook", BotController.getWebhook)
    router.post("/webhook", BotController.postWebhook)
    
}

module.exports = initWebRoutes