(function() {
    'use strict';
  
    function cocktailSearch($http) {
      var service = {};
      service.cocktailList = [];
      service.cocktailDetail = {};
      service.cocktailDetailIngredients = [];
      service.getCocktailDetails = getCocktailDetails;
      service.getCocktails = getCocktails;
      
      function getCocktailDetails(string){
        var query = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+string;
        return $http.get(query)
          .then(function(response){
            console.log(response.data.drinks[0]);
            service.cocktailDetail = response.data.drinks[0];

            
          })
          .catch(function(error){
            service.cocktailDetail = {};
          });
      }

      function getCocktails(string){
        var query = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+string;
        return $http.get(query)
          .then(function(response){
            service.cocktailList = response.data.drinks;
          })
          .catch(function(error){
            service.cocktailList = [];
          });

      }

      return service;
    }

    cocktailSearch.$inject = ['$http'];
    
    angular.module('daproject')
        .factory('cocktailSearch', cocktailSearch);
  
})();