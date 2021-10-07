
const express = require("express");
const viewEngine = require("./config/viewEngine");
const initWebRoute = require("./routes");
const bodyParser = require("body-parser");
require("dotenv").config();

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
viewEngine(app)
initWebRoute(app);

let port = 3000 ;

app.listen(port, () => {
    console.log("Chatbot is running on Port : " + port )
})




