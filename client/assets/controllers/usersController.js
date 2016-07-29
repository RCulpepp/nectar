myApp.controller('usersController', ['$scope','userFactory', '$http', '$location', function($scope,thingFactory, $http, $location) {
	$scope.create = function(){
		var user = {
			fname: $scope.fname,
			lname: $scope.lname,
			email: $scope.email
		}

		var pass_valid_num = 
		var pass_valid_capital = 
		var pass_valid_special = 

		} else {
			userFactory.findUser(user.email, function(err, user){
				if(err){
					$scope.error = err
				} else if (typeof(data) == 'object'){
					$scope.error = 'The email address you entered is already being used.'
				}
			})
			user.pass
		}


	}
}]);