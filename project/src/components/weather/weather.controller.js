(function() {
  'use strict';

  function WeatherCtrl() {
    var vm = this;
    vm.pute = "PUTEBELGE";
  }

  WeatherCtrl.$inject = [];

  angular.module('daproject')
    .controller('WeatherCtrl', WeatherCtrl);

})();
