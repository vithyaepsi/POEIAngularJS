(function() {
    'use strict';
  
    function meteoService($http, settingService) {
      var service = {};
      service.meteoListe = [];
      service.getMeteo = getMeteo;
      service.temp = null;
      service.http = $http;
      service.settingService = settingService;
      service.switchUnit = switchUnit;
      return service;

      function getMeteo(){
        var apiId = 'db7710477435add094441bd39b0d91f9';
        var query = 'http://api.openweathermap.org/data/2.5/forecast?q='+ service.settingService.city +'&APPID='+ apiId +'&units=metric';
        return service.http.get(query)
          .then(function(response){
            console.log(response.data.list);
            service.meteoListe = response.data.list;
            service.temp = service.meteoListe[0].main.temp;
            if(service.settingService.isCelsius === false){
              switchUnit();
            }
            
          })
          .catch(function(error){
            console.log(query);
            console.log('brokeshit');
            service.temp = null;
            service.meteoListe = [];
          });
      }

      function switchUnit(){
        if( typeof(service.temp) !== 'undefined'){
          if(service.settingService.isCelsius === true){
            service.temp = ( service.temp * 1.8 ) + 32;
          }
          else{
            service.temp = ( service.temp - 32) / 1.8;
          }
        }
      }

    }

    meteoService.$inject = ['$http', 'settingService'];
    
    angular.module('daproject')
        .factory('meteoService', meteoService);
  
})();