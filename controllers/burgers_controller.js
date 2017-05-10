var db = require("../models");

module.exports = function(app) {

    // Create routes
    app.get('/', function(req, res) {
        res.redirect('/index');
    });

    // Render page with all objects from burgers table in burgers_db
    app.get("/index", function(req, res) {
        db.Burger.findAll({}).then(function(data) {
            console.log(data);
            var hbsObject = {
                foobar: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    // Post route to /index when adding new burger
    app.post('/index', function(req, res) {
        db.Burger.create({
            burger_name: req.body.name
        }).then(function (results) {
            res.redirect('/index');
        });
    });


    // Put route to /index/:id when updating burger to devoured=true
    app.put("/:id", function(req, res) {
        console.log(JSON.stringify(req.body));
        console.log("id to update: ", req.params.id);

        db.Burger.update({
            burger_name: req.body.name,
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.json(results);
            // res.redirect("/index");
        });

    });



};
