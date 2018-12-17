angular.module('details.controller', []).controller("DetailsController", _detailsController)

function _detailsController($scope, $http, $stateParams) {
	$http({
		method: 'GET',
		url: 'http://localhost:7000/api/v1/user/' + $stateParams.id
	}).then(function (response) {
		$scope.data1 = eval(response.data.data);
	}, function (error) {
		console.log('Lỗi 000 - Main: ' + error);
	});
	
}
