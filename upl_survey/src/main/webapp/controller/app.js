var upl_survey = angular.module("upl_survey", ['ngRoute']);

upl_survey.config(['$locationProvider','$routeProvider',
	function($locationProvider,$routeProvider) {
	$locationProvider.hashPrefix('!');
   $routeProvider.
   
   when('/', {
      templateUrl: 'index.html', controller: 'LoginController'
   }).
   
   when('/surveyList', {
      templateUrl: 'view/SurveyList.html', controller: 'LoginController'
   }).
   
   otherwise({
      redirectTo: '/'
   });
	
}]);

//var UPL_SURVEY = angular.module('upl_survey',[ 'ui.router'])
//demoApp.constant("CONSTANTS", {
//	UserLogin : "/upl_survey/UserLogin/"
//});
//	.config([
//		'$stateProvider',
//		'$urlRouterProvider',
//		function($stateProvider, $urlRouterProvider) {
//
//			$stateProvider
//				.state('index', {
//					url : '/index',
//					templateUrl : '/index.html',
//					controller : 'LoginController'
//				})
//				.state('surveyList', {
//					url : '/surveyList',
//					templateUrl : '/SurveyList.html',
//					controller : 'LoginController'
//				});
//
//			$urlRouterProvider.otherwise('index');
//		} ])
