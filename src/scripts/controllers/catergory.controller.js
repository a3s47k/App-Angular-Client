angular.module('catergory.controller', []).controller("CatergoryController", _catergoryController)

function _catergoryController($scope, $http) {
	$scope.submit = function () {
		console.log("test scope function angular")
		let datatmp = "username="+$scope.username+"&password="+$scope.password;
		$http({
			method: 'POST',
			url: 'http://localhost:3000/check',
			cache: false,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: datatmp,
		}).then(function (response) {
			console.log(response);
		}, function (error) {
			console.log('Lỗi 000 - Main: ' + error);
		});
	}
}
