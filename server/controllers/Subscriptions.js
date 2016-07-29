var mongoose = require('mongoose');
var Subscription = mongoose.model('Subscription');
var Order = mongoose.model('Order');
var crypto = require('crypto');
var sensData = require("../config/sesitive.js")
var stripe = require("stripe")(sensData.stripeTestKey);


function Subscriptions(){
	this.create = function(req,res){
		stripe.customers.create({
			source: req.body.token,
			plan: req.body.plan,
			email: req.body.email
		}, function(err, customer){
			if(err){
				res.send({error: {message: err}});
				return;
			else {
				var subscription = {
					_user: session._id,
					type: customer.subscriptions.data.plan.id,
					next_delivery: req.body.delivery,
					_stripe_id: customer.subscriptions.data.id
				}

				var subscription = new Subscription()
			}
		}
	}
}

module.exports = new Subscriptions;