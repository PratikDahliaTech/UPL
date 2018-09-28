upl_survey.controller("loginController", [
		'$scope',
		'$location',
		'loginService',
		function($scope, $location, loginService) {
			console.log("In controller");

			$scope.loginUser = function() {
				console.log($scope.email, $scope.password);
				console.log("In function");
				loginService.loginUser($scope.email, $scope.password).then(
						function(response) {
							console.log(response);
							$location.url('/menu');
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