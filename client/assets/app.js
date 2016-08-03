var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: './partials/index.html',
		controller: 'indexController'
	})
	.when('/register', {
		templateUrl: './partials/register.html',
		controller: 'usersController'
	})
	.when('/dashboard', {
		templateUrl: './partials/dashboard.html',
		controller: 'dashboardsController'
	})
	// .when('/edit/:id', {
	// 	templateUrl: './partials/edit.html',
	// 	controller: 'editController',
	// })
	// .when('/show/:id', {
	// 	templateUrl: './partials/show.html',
	// 	controller: 'showController'
	// })
	.otherwise({
		redirectTo:'/'
	})
});