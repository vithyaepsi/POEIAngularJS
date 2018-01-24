(function() {
  'use strict';

  angular.module('daproject', [
    'ui.bootstrap',
    'ngRoute',
    'ngAnimate'
  ]);

  angular.module('daproject')
    .config(AppConfig);

  angular.module('daproject')
    .run(RunUtils);

  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/app/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
      })
      .when('/exo03', {
        templateUrl: 'src/app/exo3/exo3.html',
        controller: 'Exo3Ctrl',
        controllerAs: 'exo3',
      })
      .when('/exo04', {
        templateUrl: 'src/app/exo4/exo4.html',
        controller: 'Exo4Ctrl',
        controllerAs: 'exo4',
      })
      .when('/more', {
        templateUrl: 'src/app/more/more.html',
        controller: 'MoreCtrl',
        controllerAs: 'more',
      })
      .otherwise({redirectTo:'/'});
  }

  function RunUtils($rootScope) {
    $rootScope.safeApply = function(fn) {
      var phase = $rootScope.$$phase;
      if (phase === '$apply' || phase === '$digest') {
        if (fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };
  }

})();
