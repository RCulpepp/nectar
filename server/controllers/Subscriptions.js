var mongoose = require('mongoose');
var Subscription = mongoose.model('Subscription');
var Order = mongoose.model('Order');
var crypto = require('crypto');
var sensData = require("../config/sesitive.js")
var stripe = require("stripe")(sensData.stripeTestKey);


function Subscriptions(){
	this.create = function(req,res){
		stripe.customers.create({
			card: req.body.token,
			plan: req.body.plan,
			email: req.body.email
		}, function(err, customer){
			if(err){
				res.send({error: {message: err}});
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
					payment_received: true,
				};

				//instantiate order mongoose model
				order = new Order(order);
				res.send()	
			}
		});
	};
}

module.exports = new Subscriptions;