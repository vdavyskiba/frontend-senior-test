(function(){
    'use strict';

    define(['../module'], function (services) {

        services.factory('srvCharts', ['$http', 'appConstants', function($http, appConstants){

            return {

                getData: function(success, error){

                    return $http.get(appConstants.api.dataPath).success(success).error(error);
                },

                getPreview: function(chart, success, error){

                    var headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };

                    var params = {
                        options: JSON.stringify(chart),
                        type: 'image/png',
                        scale: 0.25,
                        async: true
                    };

                    return $http({
                        method: 'POST',
                        url: appConstants.api.exportPath,
                        headers: headers,
                        cache: false,
                        params: params
                    })
                    .success(function(src){
                        success(appConstants.api.exportPath + src)
                    })
                    .error(error);
                }
            }
        }]);
    });

})();
