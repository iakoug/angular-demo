/**
 * Created by Administrator on 2017/3/13.
 */
(function (angular) {

    let app = angular.module('items', ['MyJsonService', 'ngRoute']);
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider.when('/:options/:page?', {
            templateUrl: './items/items.html',
            controller: 'theaterCtrl',
        });

        $locationProvider.hashPrefix("");
    }]);
    app.controller('theaterCtrl', [
        '$scope',
        '$http',
        '$routeParams',
        '$route',
        'MyService',
        function ($scope, $http,$routeParams, $route, MyService) {
        /*$http.get('./theater/theaters.json').then(function(res) {
            console.log( res ) ;
            $scope.data = res.data.subjects;
        });*/
        let pageSize = 5;
        $scope.page =  ( $routeParams.page || 1 ) - 0;
        let start = ( $scope.page - 1 ) * pageSize;

        //
        $scope.loading = true;


        MyService.jsonp(
            `http://api.douban.com/v2/movie/${$routeParams.options}`,
            {
                start: start,
                count: pageSize
            },
            function ( data ) {
                $scope.data = data;
                $scope.total = data.total;
                $scope.totalPage = Math.ceil( data. total / pageSize );

                $scope.loading = false;

                $scope.$apply();
            }
        );
        //
        $scope.getChange = function(nowPage) {
            // 点击限制
            if (nowPage < 1 || nowPage > $scope.totalPage) {
                return false;
            }
            $route.updateParams({
                page: nowPage
            });
        };
    }]);


})(angular);