angular.module('login.router', []).config(_loginRoute)

function _loginRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			data : { 
				pageTitle: 'Login' 
			},
			views: {
				"@": {
					controller: 'LoginController',
					templateUrl: '/views/login.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
