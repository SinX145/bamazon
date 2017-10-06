CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Wethers Originals', 'Candy', 1.00, 100),
		('Snickers', 'Candy', 1.25, 100),
		('French Toast', 'Food', 5.99, 10),
		('Red Thai Curry', 'Food', 6.99, 20),
		('Iced Tea', 'Drink', 1.00, 150),
		('Sprite', 'Drink', 1.00, 130),
		('Orange Juice', 'Drink', 120.00, 100),
		('Childrens toys', 'Entertainment', 5.50, 300),
		('Gift Cards', 'Entertainment', 10.00, 120),
		('Blue Jay', 'Pet', 250.00, 100),
		('Coke', 'Drink', 2.00, 130),