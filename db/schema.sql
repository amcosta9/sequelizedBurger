CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured TINYINT DEFAULT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);