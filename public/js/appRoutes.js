angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })

        .when('/room', {
            templateUrl: 'views/room.html',
            controller: 'RoomController'
        })

        .when('/game', {
            templateUrl: 'views/game.html',
            controller: 'GameController'
        });

    $locationProvider.html5Mode(true);

}]);
