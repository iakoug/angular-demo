/**
 * Created by Administrator on 2017/3/15.
 */

(function (angular) {

    let app = angular.module('detail', ['MyJsonService']);

    app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider.when('/details/:id', {
            templateUrl: './details/detail.html',
            controller: 'detailsController'
        });

        $locationProvider.hashPrefix("")

    }]);
    app.controller('detailsController', ['$scope', '$routeParams','MyService', function ($scope, $routeParams, MyService) {


        MyService.jsonp(
            "http://api.douban.com/v2/movie/subject/"+$routeParams.id,
            {},
            function ( data ){
                console.log(data);
                $scope.data = data;
        } );
    }])


})(angular);