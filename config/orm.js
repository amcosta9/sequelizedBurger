// Import MySQL connection.
var connection = require("../config/connection.js");


// ORM object
var orm = {
    // Select all burgers from burgers table in burgers_db
    selectAll: function (tableInput, cb) {
        console.log('selectAll function');
        var queryString = "SELECT * FROM " + tableInput + ";";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            console.log('query cb');
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Add new burger to burgers table in burgers_db.
    insertOne: function (burger_type, cb) {
        console.log('insertOne function');
        var queryString = "INSERT INTO `burgers` (burger_name) VALUES ('" + burger_type + "')";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // Update burger to devoured from burgers table in burgers_db
    updateOne: function (id, cb) {
        console.log('updateOne function');
        var queryString = "UPDATE `burgers` SET `devoured` = 1 WHERE `id` = " + id;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the orm object
module.exports = orm;