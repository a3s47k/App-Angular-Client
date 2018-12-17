angular.module('help.controller', []).controller("HelpController", _helpController)

function _helpController($scope, $http) {
	$http({
		method: 'GET',
		url: 'http://localhost:7000/api/v1/user',
	}).then(function (response) {
		console.log(response.data.lists)
		$scope.data = eval(response.data.lists);

	}, function (error) {
		console.log('Lỗi 000 - Main: ' + error);
	});
	
}
