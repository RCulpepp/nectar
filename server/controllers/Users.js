var mongoose = require('mongoose');
var User = mongoose.model('User');
var crypto = require('crypto');
function Users(){
	this.index = function(req, res){
		User.find({}, function(err, doc){
			if(err){
				console.log(err);
			} else {
				res.json(doc);
			}
		})
	}
	//log user in
	this.login = function(req, res){
		//check if email is in the system	
		User.findOne({email: req.body.email}, function(err, user){
			if(err){
				console.log(err);
				res.send(err.validation);
				return;
			} else if(!user){
				res.json({errors: {email: {message: 'The email address you entered is not in our database.'}}});
			} else if(typeof(user.password) == 'string'){
				var input_pass = crypto.createHmac('sha256', user.pw_salt).update(req.body.password).digest('hex');
				if (input_pass == user.password){
					req.session._id = user._id;
					req.session.name = user.name;
					res.send(user._id);
				} else {
					res.json({errors: {password: {message: 'The password you entered does not match our records.'}}});
				};
			}
		});
	};

	//make a new user and log them in
	this.create = function(req,res){
		//check if email is already in the system
		console.log(req.body);
		User.findOne({email: req.body.email}, function(err, user){
			if(err){
				console.log(err);
				res.send(err.validation);
				return;
			}
			//return error if found or if there was a user
			if(user){
				res.send({errors: {email: {message: 'The email you entered already exists in our system or there was a problem with your request.'}}});
				return '';
			} else {
				//break function if headers have been sent.
				var user = new User(req.body);
				user.save(function(err){
					if(err){
						console.log('second: ', err.errors);
						res.json(err);
					} else {
						req.session.name = user.name
						req.session._id = user._id
						res.send(user._id)
					}
				});
			};
		});	
	};	

	//change info for a user
	this.update = function(req, res){
	
	};

	//delete a thing
	this.delete = function(req,res){
		
	};
}
module.exports = new Users