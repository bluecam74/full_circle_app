CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (100) NOT NULL, 
    devoured  BOOLEAN, 
    PRIMARY KEY (id)
);
