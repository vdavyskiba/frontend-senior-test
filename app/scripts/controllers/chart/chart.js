(function(){
    'use strict';

    define(['../module'], function (controllers) {

        controllers.controller('ctrlChart', ['$scope', '$routeParams', 'srvCharts', 'mlChart', 'appConstants', function ($scope, $routeParams, srvCharts, mlChart, appConstants) {

            var type = $routeParams.type;

            $scope.model = {
                types: appConstants.chartType,
                chart: null
            };

            srvCharts.getData(function(data){

                var title = [type, 'chart'].join(' ');

                $scope.model.chart = new mlChart(title, $routeParams.type, data)

            }, function(err){
                console.log(err)
            });

        }]);

    });

})();
