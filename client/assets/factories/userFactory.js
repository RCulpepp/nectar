myApp.factory('thingFactory', ['$http', '$routeParams', function($http, $routeParams){
	this.user = [];
	
	this.findUser = function(email, callback){
		$http.post('/users', function(data){
			if(data.err){
				
			}
		})
	}

	this.show = function(id, callback){
      
    };
	this.showAll = function(callback){
      
    };

	this.create = function(newThing, callback){
	
	};

	this.update = function(thing_data, callback){
		
	};

	this.delete = function(id){
		
	};


    return this;
}]);