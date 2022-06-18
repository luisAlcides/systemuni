const controller = {};

controller.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM product', (err, product) => {
			if (err) {
				res.json(err);
			}
			res.render('product', {
				data: product,
			});
		});
	});
};

controller.save = (req, res) => {
	const { name, code, ubication, date_pres } = req.body;
	req.getConnection((err, conn) => {
		conn.query(
			'insert into product (name, code, ubication, date_pres) values (?, ?,?,?);  ',
			[name, code, ubication, date_pres],
			(err, rows) => {
				res.redirect('/');
			}
		);
	});
};

controller.edit = (req, res) => {
	const { id } = req.params;
	console.log(req.params);
	req.getConnection((err, conn) => {
		conn.query(
			'SELECT * FROM product WHERE product_id = ?',
			[id],
			(err, rows) => {
				res.render('product_edit', {
					data: rows[0],
				});
			}
		);
	});
};

controller.update = (req, res) => {
	const { id } = req.params;
	const { name, code, ubication, date_pres } = req.body;
	req.getConnection((err, conn) => {
		conn.query(
			'UPDATE product SET name=?, code=?, ubication=?, date_pres=? WHERE product_id = ?',
			[name, code, ubication, date_pres, id],
			(err, rows) => {
				res.redirect('/');
			}
		);
	});
};

controller.delete = (req, res) => {
	const { id } = req.params;
	req.getConnection((err, connection) => {
		connection.query(
			'DELETE FROM product WHERE product_id = ?',
			[id],
			(err, rows) => {
				res.redirect('/');
			}
		);
	});
};

module.exports = controller;
