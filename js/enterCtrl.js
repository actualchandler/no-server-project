angular.module("bingeApp").controller("enterCtrl", function ($scope, mainSrv, $state) {

     $scope.getWeather = function (zip, name) {
          mainSrv.getWeather(zip).then(function (response) {
               $scope.weather = response.data;
               console.log(response);
               $state.go("main", { name: name });
          })
     }

     $scope.searchZip = function () {
          mainSrv.getWeather($scope.zipInput).then(function (response) {
               $scope.zip = response;
               console.log($scope.zip);
          })
     }

});
