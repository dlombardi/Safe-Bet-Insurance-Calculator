window.app = angular.module('insuranceApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
   $urlRouterProvider.otherwise('/');
   $stateProvider
    .state('insurance', {
      url: '/insurance',
      templateUrl : '/pages/insurance.html',
      controller : 'mainController'
    });
});
