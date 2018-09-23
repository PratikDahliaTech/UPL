var upl_survey = angular.module("upl_survey", ['ngRoute', 'ngResource']);

upl_survey.config(['$routeProvider',
	function($routeProvider) {
   $routeProvider.
   
   when('/', {
      templateUrl: 'index.html', controller: 'LoginController' , service:'LoginService'
   }).
   
   when('/surveyList', {
      templateUrl: 'view/SurveyList.html', controller: 'LoginController'
   }).
   
   otherwise({
      redirectTo: '/'
   });
	
}]);
