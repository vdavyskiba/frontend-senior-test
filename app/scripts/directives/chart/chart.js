(function(){
    'use strict';

    define(['../module'], function (directives) {

        directives.directive('chart', [ function () {

            var loaded = false;

            function load(callback){
                require(['highcharts'], function(){
                    callback();
                });
            }

            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'scripts/directives/chart/chart.html',
                scope: {
                    data: '='
                },
                link: function ($scope, $element) {

                    var scope = true;

                    var $chart = null;

                    if(loaded){
                        init()
                    } else {
                        load(function(){
                            loaded = true;
                            scope && init();
                        });
                    }

                    function init(){

                        $element.highcharts($scope.data);

                        $chart = $element.highcharts();

                        $scope.$watch(function(){

                            return $scope.data.title.text;
                        },function(val){

                            $chart.setTitle({text: val});
                        });

                        $scope.$watch(function(){

                            return $scope.data.chart.type;

                        },function(){

                            $chart.destroy();

                            $element.highcharts($scope.data);

                            $chart = $element.highcharts();
                        });

                        $scope.$on('$destroy', function(){

                            $chart && $chart.destroy();

                            $chart = null;
                        });
                    }

                    $scope.$on('$destroy', function(){
                        scope = false;
                    });

                }
            };

        }]);
    });

})();
