upl_survey.controller("loginController", [
		'$scope',
		'$location',
		'loginService',
		'sourceObject',
		function($scope, $location, loginService,sourceObject) {
			console.log("In login controller");

			$scope.loginUser = function() {
				console.log($scope.email, $scope.password);
				console.log("In loginUser function");
				loginService.loginUser($scope.email, $scope.password).then(
						function(response) {
							console.log(response);
							$location.url('/surveyList');
							sourceObject.currentUser = response.data;
							console.log("source :",sourceObject.currentUser);
						}, function(errResponse) {
							console.log(errResponse)
							console.error('Error while creating User');
						})
			}
		} ]);

upl_survey.service('loginService', [ '$http', function($http) {

	this.loginUser = function loginUser(email, password) {
		console.log(email, password);
		return $http({
			method : 'GET',
			dataType : 'json',
			headers : {
				"Content-Type" : "application/json"
			},
			url : '/upl_survey/loginUser',
			params : {
				email : email,
				password : password
			}
		});
	}
} ]);