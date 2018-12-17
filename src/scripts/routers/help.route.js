angular.module('help.router', []).config(_helpRoute)

function _helpRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('help', {
			url: '/help',
			data : { 
				pageTitle: 'Support' 
			},
			views: {
				"@": {
					controller: 'HelpController',
					templateUrl: '/views/help.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
