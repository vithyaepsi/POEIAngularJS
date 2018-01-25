(function() {
  'use strict';

  function CocktailCtrl() {
    var vm = this;
    vm.pute = 'PUTEBELGE';
  }

  CocktailCtrl.$inject = [];

  angular.module('daproject')
    .controller('CocktailCtrl', CocktailCtrl);

})();
