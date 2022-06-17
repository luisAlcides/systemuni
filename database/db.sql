-- to create a new database
CREATE DATABASE systemuni;

-- to use database
use systemuni;

-- creating a new table
CREATE TABLE product (
  product_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  code VARCHAR(100) NOT NULL UNIQUE,
  ubication VARCHAR(15),
  date_pres DATE
);

-- to show all tables
show tables;

-- to describe table
describe customer;

insert into product (name, code, ubication, date_pres) values ('product1', 'code1', 'ubication1', '2020-01-01');  



