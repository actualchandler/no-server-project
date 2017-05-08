angular.module('bingeApp', ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {
     $stateProvider
          .state('main', {
               url: "/main/:name/:zip",
               templateUrl: "./html/main.html",
               controller: "mainCtrl"
          })
          .state('enter', {
               url: "/enter",
               templateUrl: "./html/enter.html",
               controller: "enterCtrl"
          })

     $urlRouterProvider.otherwise('/enter');
});


