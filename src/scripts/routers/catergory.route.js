angular.module('catergory.router', []).config(_catergoryRoute)

function _catergoryRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('catergory', {
			url: '/catergory',
			data : { 
				pageTitle: 'Catergory' 
			},
			views: {
				"@": {
					controller: 'CatergoryController',
					templateUrl: '/views/catergory.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
