var mongoose = require('mongoose');
var Subscription = mongoose.model('Subscription');
var Order = mongoose.model('Order');
var crypto = require('crypto');
var sensData = require("../config/sensitive.js")
var stripe = require("stripe")(sensData.stripeTestKey);


function Subscriptions(){
	this.create = function(req,res){
		//find user and update with CC token
		User.update({_id: req.body._id},{$set: {card: req.body.token}}, function(err){
			if(err){
				res.send({token: {message: "Unable to update customer token."}})
			}
		})
		//create user in stripe
		stripe.customers.create({
			card: req.body.token,
			plan: req.body.plan,
			email: req.body.email
		}, function(err, customer){
			if(err){
				res.send(err.validation.errors);
			} else {
				//create new subscription object
				var subscription = {
					_user: req.session._id,
					type: customer.subscriptions.data.plan.id,
					next_delivery: req.body.delivery,
					_stripe_id: customer.subscriptions.data.id
				}
				//create new subscription mongoose instance
				var subscription = new Subscription(subscription);

				//create new order object
				var order = {
					_user: session._id,
					_subscription: subscription._id,
					delivery_date: req.body.delivery,
					delivery_address: req.body.address,
					products: req.body.products,
					payment_received: true
				};

				//instantiate order mongoose model
				order = new Order(order);
				res.send()	
			}
		});
	};
	//update subscription
	this.update = function (req,res){
		var sub_info = {
			type: req.body.type,
			day: req.body.day
		};
		//query Mongo
		Subscription.update({_id: req.body.id}, sub_info, function(err, subscription){
			if(err){
				res.send(err.validatation.errors)
			} else {

			}
		})
	}

}

module.exports = new Subscriptions;