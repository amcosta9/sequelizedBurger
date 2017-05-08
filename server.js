/**
 * Created by Ariel on 5/1/2017.
 */
var orm = require('./config/orm.js'),
    express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    routes = require('./controllers/burgers_controller.js');

// Sets up express Server
var app = express();
var PORT = process.env.PORT || 5432;

// Sets up bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// serve static content from public dir
// app.use(express.static('./public'));
app.use(express.static(process.cwd() + "/public"));
// enable POST override
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

// starting server w/ listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

