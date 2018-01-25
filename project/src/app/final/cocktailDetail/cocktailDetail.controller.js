(function() {
  'use strict';

  function CocktailDetailCtrl($location, cocktailSearch) {
    var vm = this;
    vm.redirect = redirect;
    vm.cocktailSearch = cocktailSearch;
    
    function redirect(){
      $location.path('/final');
    }
  }

  CocktailDetailCtrl.$inject = ['$location', 'cocktailSearch'];

  angular.module('daproject')
    .controller('CocktailDetailCtrl', CocktailDetailCtrl);

})();
