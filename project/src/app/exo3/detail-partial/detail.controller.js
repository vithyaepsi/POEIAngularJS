(function() {
  'use strict';

  function DetailCtrl() {
    var vm = this;
    vm.texte = 'Je suis un gentil poulet';
    
  }

  DetailCtrl.$inject = [];

  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);

})();
