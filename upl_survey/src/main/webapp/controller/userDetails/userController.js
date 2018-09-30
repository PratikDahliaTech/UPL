upl_survey.controller("userController", [
		'$scope',
		'$location',
		'userService',
		'sourceObject',
		function($scope, $location, userService, sourceObject) {
			console.log("In user controller");
			$scope.data = [];
			var id = sourceObject.currentUser;
			console.log(sourceObject.currentUser);
			$scope.addUser = function() {
				$location.url('/addUser');
			}

			$scope.addNewUser = function() {
				console.log("In add function");

				$scope.created_by = sourceObject.currentUser.id;
				console.log($scope.data);
				if ($scope.data.type = "ADMIN") {
					$scope.data.type = 2;
				} else if ($scope.data.type = "USER") {
					$scope.data.type = 3;
				} else {
					$scope.data.type = 4;
				}
				$scope.user_master_id = $scope.data.type;
				userService.addUser($scope.data.password, $scope.created_by,
						$scope.phone_no, $scope.data.email,
						$scope.user_master_id).then(function(response) {
					console.log(response);
					$location.url('/userList');
				}, function(response) {
					$scope.errors = response.data.errorMessages;
					console.error('Error while creating User');
				})
			}

			$scope.editUserDetails = function() {
				$location.url('/editUser');
			}

			$scope.updateUserDetails = function() {
				console.log("In function");
				userService.updateUserDetails($scope.id, $scope.password,
						$scope.updated_by$scope.phone_no, $scope.email,
						$scope.user_master_id).then(function(response) {
					console.log(response);
					$location.url('/userList');
				}, function(response) {
					$scope.errors = response.data.errorMessages;
					console.error('Error while creating User');
				})
			}

			$scope.deleteUserDetails = function() {
				// TODO: Model popOut code
			}

			$scope.deleteUserDetails = function() {
				console.log("In function");
				userService.deleteUserDetails($scope.id).then(
						function(response) {
							console.log(response);
							$scope.userDetails = response.data.items;
							$location.url('/userList');
						}, function(response) {
							$scope.errors = response.data.errorMessages;
							console.error('Error while creating User');
						})
			}

			$scope.getAllUserDetails = function() {
				console.log("In function");
				userService.getAllUserDetails($scope.id).then(
						function(response) {
							console.log(response);
							$scope.userDetails = response.data.items;
							$location.url('/userList');
						}, function(response) {
							$scope.errors = response.data.errorMessages;
							console.error('Error while creating User');
						})
			}

			// $scope.getAllUserDetails();

		} ]);

upl_survey.service('userService', [
		'$http',
		function($http) {

			this.addUser = function addUser(password, created_by, phone_no,
					email, user_master_id) {
				console.log("In add user service");
				return $http({
					method : 'POST',
					url : '/upl_survey/addUser',
					params : {
						password : password,
						created_by : created_by,
						phone_no : phone_no,
						email : email,
						user_master_id : user_master_id
					}
				});
			}

			this.updateUserDetails = function updateUserDetails(id, password,
					updated_by, phone_no, email, user_master_id) {
				return $http({
					method : 'GET',
					url : '/upl_survey/updateUserDetails',
					params : {
						id : id,
						password : password,
						updated_by : updated_by,
						phone_no : phone_no,
						email : email,
						user_master_id : user_master_id
					}
				});
			}

			this.updateUserDetails = function updateUserDetails(id) {
				return $http({
					method : 'GET',
					url : '/upl_survey/deleteUserDetails',
					params : {
						id : id
					}
				});
			}

			this.getAllUserDetails = function getAllUserDetails() {
				return $http({
					method : 'GET',
					url : '/upl_survey/deleteUserDetails',
				});
			}
		} ]);
