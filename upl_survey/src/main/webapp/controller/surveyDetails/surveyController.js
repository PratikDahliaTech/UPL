upl_survey.controller("surveyController", [
	'$scope',
	'surveyService',
	function($scope, surveyService) {
		
		$scope.surveyList =[
			{
				"form_id" :"1",
				"dealer_name":"abc",
				"created_by":"pratik",
				"created_date":"12-2-2018"
			}
		]
		console.log("In survey controller");
		$scope.getAllForms = function() {
			console.log("In getAllForms function");
			surveyService.getAllForms($scope.password, $scope.password)
				.then(function(response) {
					console.log(response);
					$scope.userDetails = response.data.items;
					$location.url('/surveyList');
				}, function(response) {
					$scope.errors = response.data.errorMessages;
				})
		}

		$scope.updateForm = function() {
			$location.url('/updateSurvey');
		}

		$scope.updateForm = function() {
			console.log("In function");
			surveyService.updateForm($scope.id, $scope.form_detail,
				$scope.form_id, $scope.last_updated_by).then(
				function(response) {
					console.log(response);
					$scope.userDetails = response.data.items;
					$location.url('/surveyList');
				}, function(response) {
					$scope.errors = response.data.errorMessages;
				})
		}

		$scope.deleteForm = function() {
			// #TODO: #model code

		}

		$scope.deleteForm = function() {
			console.log("In function");
			surveyService.deleteForm($scope.id).then(function(response) {
				console.log(response);
				$scope.userDetails = response.data.items;
				$location.url('/surveyList');
			}, function(response) {
				$scope.errors = response.data.errorMessages;
			})
		}

		$scope.addSurvey = function() {
			$location.url('/addSurvey');
		}

		$scope.createNewSurvey = function() {
			console.log("In function");
			surveyService.createForm($scope.form_detail, $scope.form_id,
				$scope.created_by, $scope.last_updated_by,
				$scope.language_id).then(function(response) {
				console.log(response);
				$scope.userDetails = response.data.items;
				$location.url('/surveyList');
			}, function(response) {
				$scope.errors = response.data.errorMessages;
			})
		}

	} ]);

upl_survey.service('surveyService', [
	'$http',
	function($http) {

		this.getAllForms = function getAllForms() {
			return $http({
				method : 'POST',
				url : '/upl_survey/getAllForms',
			});
		}

		this.updateForm = function updateForm(id, form_detail, form_id,
			last_updated_by) {
			return $http({
				method : 'GET',
				url : '/upl_survey/updateForm',
				params : {
					id : id,
					form_detail : form_detail,
					form_id : form_id,
					last_updated_by : last_updated_by
				}
			});
		}

		this.deleteForm = function deleteForm(id) {
			return $http({
				method : 'GET',
				url : '/upl_survey/deleteForm',
				params : {
					id : id
				}
			});
		}

		this.createForm = function createForm(form_detail, form_id,
			created_by, last_updated_by, language_id) {
			return $http({
				method : 'GET',
				url : '/upl_survey/createForm',
				params : {
					form_detail : form_detail,
					form_id : form_id,
					created_by : created_by,
					last_updated_by : last_updated_by,
					language_id : language_id
				}
			});
		}
	} ]);