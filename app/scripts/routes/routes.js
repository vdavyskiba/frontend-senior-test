(function(){
    'use strict';

    define(['app'], function (app) {

        app.config(['$routeProvider', function ($routeProvider) {

            $routeProvider.when('/home', {
                templateUrl: 'scripts/controllers/home/home.html',
                controller: 'ctrlHome'
            });

            $routeProvider.when('/about', {
                templateUrl: 'scripts/controllers/about/about.html',
                controller: 'ctrlAbout'
            });

            $routeProvider.when('/chart/:type', {
                templateUrl: 'scripts/controllers/chart/chart.html',
                controller: 'ctrlChart'
            });

            $routeProvider.otherwise({
                redirectTo: '/home'
            });
        }]);
    });

})();
