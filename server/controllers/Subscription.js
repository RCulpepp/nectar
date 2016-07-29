var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	_subscription: {type: mongoose.Schema.Types.ObjectId, ref: "Subscription"},
	delivery_date: Date,
	delivery_address: String,
	products: [String],
	payment_received: Boolean,
	completed: {type: Boolean, default: false}
	_stripe_invoice_id: String
}, {timestamps: true});

var SubscriptionSchema = new mongoose.Schema({
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	type: {type: String, required: true},
	last_delivery: {type: Date, default: null},
	next_delievery: Date,
	_orders = [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}],
	_stripe_subs_id: String
}, {timestamps: true});


//create model in Mongoose
mongoose.model('Order', OrderSchema);
mongoose.model('Subscription', SubscriptionSchema);
