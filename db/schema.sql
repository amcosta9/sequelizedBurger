CREATE DATABASE seqBurgers_db;
USE seqBurgers_db;


# will use sequelize model instead of this:

# CREATE TABLE burgers
# (
#   id int NOT NULL AUTO_INCREMENT,
#   burger_name varchar(255) NOT NULL,
#   devoured TINYINT DEFAULT false,
#   date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
#   PRIMARY KEY (id)
# );