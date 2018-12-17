angular.module('home.controller', []).controller("HomeController", _homeController)

function _homeController($scope , $http) {
	$http({
		method: 'GET',
		url: 'http://localhost:7000/api/v1/user',
	}).then(function (response) {
		$scope.data = eval(response.data.lists);
		console.log(lists);
	}, function (error) {
		console.log('Lỗi 000 - Main: ' + error);
	});
}
