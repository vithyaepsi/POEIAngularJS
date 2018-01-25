(function() {
  'use strict';
	
	angular.module('daproject')
    .directive('weatherDirective', function() {
      return {
        templateUrl: 'src/components/weather/weather.html',
        restrict: 'E',
        bindToController: {
          meteoElement: '='
        },
        scope: {},
        controller: 'WeatherCtrl',
        controllerAs: 'weather'
      };
    });

})();