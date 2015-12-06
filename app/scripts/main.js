(function(){
    'use strict';

    require.config({

        //entry point
        deps: ['bootstrap'],

        shim: {
            'angular': {
                exports: 'angular',
                deps: [ 'jquery' ]
            },
            'angular-route': {
                deps: [ 'angular' ]
            },
            'highcharts': {
                deps: [ 'jquery' ]
            }
        },

        paths: {
            'text': 'bower_components/requirejs-text/text',
            'domReady': '../bower_components/requirejs-domready/domReady',
            'jquery': '../bower_components/jquery/dist/jquery.min',
            'angular': '../bower_components/angular/angular.min',
            'angular-route': '../bower_components/angular-route/angular-route.min',
            'highcharts': '../bower_components/highcharts-release/highcharts'
        }
    });

})();
