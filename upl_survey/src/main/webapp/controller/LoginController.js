upl_survey.controller("LoginController", ['$scope','$location',
	function($scope,$location) {
		
		$scope.LoginUser = function(user) {
				console.log("InsideSaveUser")
				//$location.url('/surveyList');
				$window.location.href = 'view/SurveyList.html';
			};

//			UserService.saveUser($scope.userDto).then(function() {
//				console.log("works");
//			}, function(reason) {
//				console.log("error occured");
//				
//				
//			}, function(value) {
//				console.log("no callback");
//			});
		}
]);