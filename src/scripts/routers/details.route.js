angular.module('details.router', []).config(_detailsRoute)

function _detailsRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('details', {
			url: '/details/:id',
			data : { 
				pageTitle: 'User Detail' 
			},
			views: {
				"@": {
					controller: 'DetailsController',
					templateUrl: '/views/details.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
