(function (angular) {

    let app = angular.module('home_page', ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/home_page', {
            templateUrl: './home/home.html'
        }).otherwise({
            redirectTo: '/home_page'
        });
        $locationProvider.hashPrefix("");
    }]);

})(angular);