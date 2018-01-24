(function() {
  'use strict';

  function MoreCtrl($location, meteoService) {
    var vm = this;
    vm.redirect = redirect;
    vm.meteoService = meteoService;


    function redirect(){
      $location.path('/exo04');
    }
    
  }

  MoreCtrl.$inject = ['$location', 'meteoService'];

  angular.module('daproject')
    .controller('MoreCtrl', MoreCtrl);

})();
