(function() {
  'use strict';

  function Exo4Ctrl(settingService, meteoService, $location) {

    var vm = this;
    vm.inpute = 'coucou';
    vm.clicker = clicker;
    vm.settingService = settingService;
    vm.meteoService = meteoService;
    vm.toggleUnit = toggleUnit;
    vm.location = $location;
    vm.redirect = redirect;

    function clicker(){
      vm.settingService.city = vm.inpute;
      vm.meteoService.getMeteo();
    }

    function toggleUnit(){
      if($('.my-checkbox')[0].checked === true){
        vm.meteoService.settingService.isCelsius = true;
      }
      else{
        vm.meteoService.settingService.isCelsius = false;
      }
      vm.meteoService.switchUnit();
    }

    function redirect(){
      vm.location.path('/more');
    }

    $('.my-checkbox').bootstrapSwitch({onSwitchChange: toggleUnit});
  }

  Exo4Ctrl.$inject = ['settingService', 'meteoService', '$location'];

  angular.module('daproject')
    .controller('Exo4Ctrl', Exo4Ctrl);

})();
