var upl_survey = angular.module("upl_survey", ['ngRoute', 'ngResource']);

upl_survey.config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
//	$locationProvider.html5Mode(true);
   $routeProvider.
   
   when('/', {
      templateUrl: '/index.html', 
      controller: 'LoginController'
   }).
  
   when('surveyList', {
      templateUrl: 'SurveyList.html', 
      controller: 'LoginController'
   }).
   
   otherwise({
      redirectTo: '/'
   });
	
}]);
