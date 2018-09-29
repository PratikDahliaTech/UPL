var upl_survey = angular.module("upl_survey", [ 'ngRoute', 'ngResource' ]);

upl_survey.config([ '$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			$locationProvider.html5Mode(true).hashPrefix('');
			$routeProvider.

			when('/', {
				templateUrl : 'view/login/loginForm.html',
				controller : 'loginController'
			}).
			
			when('/surveyList', {
				templateUrl : 'view/surveyDetails/surveyList.html',
				controller : 'surveyController'
			}).

			when('/editSurvey', {
				templateUrl : 'view/surveyDetails/editSurvey.html',
				controller : 'surveyController'
			}).

			when('/addSurvey', {
				templateUrl : 'view/surveyDetails/addSurvey.html',
				controller : 'surveyController'
			}).

			when('/userList', {
				templateUrl : 'view/userDetails/userList.html',
				controller : 'userController'
			}).

			when('/editUser', {
				templateUrl : 'view/userDetails/editUser.html',
				controller : 'userController'
			}).

			when('/addUser', {
				templateUrl : 'view/userDetails/addUser.html',
				controller : 'userController'
			}).

			otherwise({
				redirectTo : '/'
			});

		} ]);
