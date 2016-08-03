myApp.controller('usersController', ['$scope','userFactory', '$http', '$location', function($scope,userFactory, $http, $location) {
	$scope.user = userFactory.user
	$scope.regisErrors;
	$scope.loginErrors;
	$scope.create = function(newUser){
		userFactory.create(newUser, function(json){
			if(json.errors){
				$scope.regisErrors = json.errors;
			} else {
				$scope.user = json;
				$location.url('/dashboard');
			}
		});
		// var user = {
		// 	fname: $scope.fname,
		// 	lname: $scope.lname,
		// 	email: $scope.email
		// }
		// 	userFactory.findUser(user.email, function(err, user){
		// 		if(err){
		// 			$scope.error = err;
		// 		} else if (typeof(data) == 'object'){
		// 			$scope.error = 'The email address you entered is already being used.'
		// 		} else {
		// 			userFactory.create(user, function(data){
		// 				$location.url('/dashboard');
		// 			});
		// 		};
		// 	});
		// 	user.pass
		// }
	}
	$scope.login = function(formInput){
		userFactory.login(formInput, function(json){
			if(json.errors){
			$scope.loginErrors = json.errors;
			} else {
				$location.url('/dashboard');
			}
		});
	}
	$scope.pay = function(){
		var card = {
			number: $scope.number,
			cvc: $scope.cvc,
			exp_month: $scope.expMonth,
			exp_year: $scope.expYear
		}
		Stripe.card.createToken(card, stripeResponseHandler)
	};
}]);
