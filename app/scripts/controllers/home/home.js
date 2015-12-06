(function(){
    'use strict';

    define(['../module'], function (controllers) {

        controllers.controller('ctrlHome', ['$rootScope', '$scope', 'srvCharts', 'appConstants', 'mlChart', function ($rootScope, $scope, srvCharts, appConstants, mlChart) {

            $scope.model = {
                types: appConstants.chartType,
                charts: null,
                current: null
            };

            $scope.onSelect = function(chart){

                $scope.model.current = $scope.isSelected(chart) ? null : chart;
            };

            $scope.isSelected = function(chart){
                return $scope.model.current === chart;
            };

            srvCharts.getData(function(data){

                //generate stub charts
                var types = Object.keys(appConstants.chartType);

                $scope.model.charts = types.map(function(type){
                    var title = type + ' chart';
                    return new mlChart(title, type, data)
                });

            }, function(err){
                console.log(err)
            });

        }]);

    });

})();
