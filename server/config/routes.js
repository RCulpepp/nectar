
var users = require('../controllers/Users.js');
module.exports = function(app){            ///<--------THESE ALL NEED TO BE CHANGED
	// app.get('/', things.index);
	// app.get('/things/:id', things.show);
	app.post('/users', users.create);
	// app.put('/things/:id', things.update);
	// app.delete('/things/:id', things.delete);
	app.post('/users/login', users.login)
}