myApp.factory('userFactory', ['$http', '$routeParams', function($http, $routeParams){
	this.user = {};
	// this.regisErrors = [];
	this.loginErrors = [];
	
	this.login = function(input, callback){
		$http.post('/users/login', input).success(function(json){
			callback(json);
		});
	}
	this.findUser = function(email, callback){
		$http.get('/users', function(data){
			if(data.err){
				callback(data,{})
			} else {
				callback({}, data)
			}
		})
	}

	this.show = function(id, callback){
      
    };
	this.showAll = function(callback){
      
    };

	this.create = function(user, callback){
		// $http.post('/users', user, function(data){
		// 	if(typeof(data.errors) == 'object'){
		// 		this.regisErrors.push(data.errors)
		// 	}

		// 	if(typeof(data.user) == 'object'){

		// 	}
		// })
		$http.post('/users', user).success(function(json){
			if(!json.errors){
				factory.user = json;
			}
			callback(json);
		})
	};

	this.update = function(thing_data, callback){
		
	};

	this.delete = function(id){
		
	};


    return this;
}]);