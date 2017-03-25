/**
 * Created by Administrator on 2017/3/15.
 */
(function (angular) {

    angular.module('autoActive', [])
        .directive('autoActive', ['$location',function($location) {

        return {
            link(scope, elements, attribute) {

                scope.location = $location;

                scope.$watch('location.url()', function (nowValue, oldValue) {

                    let hash = elements.find('a').attr('href').substr(1);

                    if ( hash.startsWith(nowValue) ) {

                        elements.parent().children().removeClass('active');
                        elements.addClass('active');
                    }

                });


            }
        }

    }]);

})(angular);