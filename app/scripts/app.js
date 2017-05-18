'use strict';


angular.module('myHomePageApp', [
   'ui.router',
   'ngResource'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app',{
          url:'/',
          views: {
              'header': {
                  templateUrl:'views/header.html'
              },
              'content': {  
                  templateUrl:'views/main.html'
              },
              'footer': {
                  templateUrl:'views/footer.html'
              }
          }
      });

      $urlRouterProvider.otherwise('/');
  });
