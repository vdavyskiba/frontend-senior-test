(function(){
    'use strict';

    define(['../module'], function (directives) {

        directives.directive('chartThumbnail', ['srvCharts', function (srvCharts) {

            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'scripts/directives/chart-thumbnail/chart-thumbnail.html',
                scope: {
                    data: '='
                },
                link: function ($scope) {


                    getThumbSrc();

                    $scope.$watch(function(){

                        return $scope.data.chart.type;

                    },function(){

                        getThumbSrc();

                    });

                    function getThumbSrc(){

                        srvCharts.getPreview($scope.data, function(src){

                            $scope.src = src;

                        }, function(err){
                            console.log(err)
                        });
                    }
                }
            };

        }]);
    });

})();
