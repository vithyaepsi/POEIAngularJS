(function() {
  'use strict';

  function FinalCtrl(searchConfig, cocktailSearch, $location) {
    var vm = this;
    vm.textbox = '';
    vm.searchConfig = searchConfig;
    vm.cocktailSearch = cocktailSearch;
    vm.clickSingleCocktail = clickSingleCocktail;
    vm.clicker = clicker;

    function clicker(){
      console.log('pouah');
      vm.searchConfig.saveInputText(vm.textbox);
      cocktailSearch.getCocktails(vm.searchConfig.ingredient);
    }

    function clickSingleCocktail(cocktail){
      console.log(cocktail.idDrink);
      cocktailSearch.getCocktailDetails(cocktail.idDrink);
      $location.path('/cocktailDetail');

    }
  }

  FinalCtrl.$inject = ['searchConfig', 'cocktailSearch', '$location'];

  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();
