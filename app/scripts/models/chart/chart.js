(function(){
    'use strict';

    define(['../module'], function (models) {

        models.factory('mlChart', [function(){

                return function (title, type, data) {

                    this.chart = {
                        type: type
                    };

                    this.title= {
                        text: title
                    };

                    this.series = data;
                };

            }]);
    });

})();
