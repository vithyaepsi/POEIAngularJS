(function() {
  'use strict';
	
	angular.module('daproject')
    .directive('cocktailDirective', function() {
      return {
        templateUrl: 'src/components/cocktail/cocktail.html',
        restrict: 'E',
        bindToController: {
          cocktailElement: '='
        },
        scope: {},
        controller: 'CocktailCtrl',
        controllerAs: 'cocktail'
      };
    });

})();