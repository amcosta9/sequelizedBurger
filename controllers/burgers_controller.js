var express = require('express'),
    router = express.Router(),
    burger = require('../models/burger.js');

// Create routes

router.get('/', function(req, res) {
    res.redirect('/index');
});

// Render page with all objects from burgers table in burgers_db
router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
        console.log(data);
        var hbsObject = {
            foobar: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Post route to /index when adding new burger
router.post('/index', function(req, res) {
    burgerName = req.body.name;
    console.log('new burg name: ', burgerName);
    burger.insertOne(burgerName, function() {
        res.redirect('/index');
    });
});


// Put route to /index/:id when updating burger to devoured=true
router.put("/:id", function(req, res) {
    var condition = req.params.id;
    console.log("id to update: ", condition);
    burger.updateOne(condition, function() {
        res.redirect("/index");
    });
});

// Export routes for server.js to use.
module.exports = router;