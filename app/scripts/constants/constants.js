(function(){
    'use strict';

    define(['angular'], function (angular) {

        angular.module('app.constants', [])
            .constant('appConstants', {

                api: {
                    dataPath: 'fake-data.json',
                    exportPath: 'http://export.highcharts.com/'
                },

                chartType: {
                    'line': 'line',
                    'column': 'column',
                    'bar': 'bar',
                    'area': 'area'
                }
            })
    });

})();
