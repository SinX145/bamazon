var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3000,
	user: 'root',
	password: 'killzone145',
	database: 'Bamazon'
});

function userInput() {

	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Item ID number?',
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How much?',
			filter: Number
        }
        
	]).then(function(input) {

		var item = input.item_id;
		var quantity = input.quantity;
		var dbdata = 'SELECT * FROM products WHERE ?';

		connection.query(dbdata, {item_id: item}, function(err, data) {

			if (err) throw err;
			if (data.length === 0) {

				console.log('Wrong Item ID');
				displayInventory();

            } 
            else {
				var productData = data[0];

				if (quantity <= productData.stock_quantity) {
					console.log('Item is in stock');


					var newData = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					connection.query(newData, function(err, data) {

						if (err) throw err;
						console.log('Total Price is : $' + productData.price * quantity);
						connection.end();
                    })
                    
				} else {
					console.log('Item is out of stock, choose a new item');
					displayInventory();
				}
			}
		})
	})
}

function displayInventory() {

	dbdata = 'SELECT * FROM products';

	connection.query(dbdata, function(err, data) {
		if (err) throw err;

		console.log(' Inventory: ');

		var dataout = '';
		for (var i = 0; i < data.length; i++) {
			dataout = '';
			dataout += 'Item ID: ' + data[i].item_id + ' | ';
			dataout += 'Product Name: ' + data[i].product_name + ' | ';
			dataout += 'Department: ' + data[i].department_name + ' | ';
			dataout += 'Price: $' + data[i].price + '\n';

			console.log(dataout);
		}

	  	userInput();
	})
}

function runBamazon() {
	displayInventory();
}

runBamazon();