var mongoose = require('mongoose');
var Subscription = mongoose.model('Subscription');
var Order = mongoose.model('Order');
var crypto = require('crypto');
var sensData = require("../config/sensitive.js")
var stripe = require("stripe")(sensData.stripeTestKey);


function Subscriptions(){
	this.update = function(req,res){
		order = {
			delivery_date: req.body.date,
			delivery_address: [req.body.street, req.body.city, req.body.state, req.body.zip],
			products: req.body.products
		}
		Order.findOne({_id: req.body.id}, {$set: order}, function(err){
			if(err){
				
			};
		});
	}
};