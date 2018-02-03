(function() {
    'use strict';
  
    function searchConfig() {
      var service = {};
      service.ingredient = 'aokdaodz';
      service.saveInputText = saveInputText;
      

      function saveInputText(string){
        service.ingredient = string;
        console.log(service.ingredient );
      }

      return service;
    }

    searchConfig.$inject = [];
    
    angular.module('daproject')
        .factory('searchConfig', searchConfig);
  
})();