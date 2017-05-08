angular.module("bingeApp").controller("mainCtrl", function ($scope, mainSrv, $stateParams) {


     $scope.name = $stateParams.name; 
   

     function getWeather() {
          mainSrv.getWeather($stateParams).then(function (response) {
               $scope.weather = response.data;
               // console.log(response);
          })
     };

     getWeather();


          function getQuote() {
               mainSrv.getQuote().then(function (response) {
                    $scope.quote = response.data[0];
                    console.log(response);
               })
          };

getQuote();
     




     // $scope.getMovie = function () {
     //      mainSrv.getMovie().then(function (response) {
     //           $scope.movie = response.data;
     //           console.log(response);
     //      })
     // }

     // $scope.getMovie();

     // $scope.searchMovie = function (title) {
     //      mainSrv.getMovie(title.split(" ").join("%20")).then(function (response) {
     //           $scope.movies = response.data.Search;
     //           console.log($scope.movies);
     //           // console.log(title);
     //      })
     // }



});