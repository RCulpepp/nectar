
var users = require('../controllers/Users.js');
var subscriptions = require('../controllers/Subscriptions.js');
module.exports = function(app){           
	// app.get('/', things.index);
	// app.get('/users/:id', users.show);
	app.post('/users', users.create);
	app.post('/users/login', users.login);
	app.post('/subscriptions/new', subscriptions.create)
	// app.put('/things/:id', things.update);
	// app.delete('/things/:id', things.delete);
	
}