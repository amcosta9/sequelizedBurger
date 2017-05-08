// Import the ORM
var orm = require("../config/orm.js");

var burger = {
    // Select all burgers from burgers table in burgers_db
    selectAll: function(cb) {
        console.log('called burger.selectall');
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    // Add new burger to burgers table in burgers_db.
    insertOne: function(burger_type, cb) {
        console.log('called burger.insertone');
        orm.insertOne(burger_type, function(res) {
            cb(res);
        });
    },
    // Update burger to devoured from burgers table in burgers_db
    updateOne: function(id, cb) {
        console.log('called burger.updateone');
        orm.updateOne(id, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;