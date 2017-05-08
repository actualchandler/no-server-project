angular.module("bingeApp").service("mainSrv", function ($http) {

     this.getWeather = function (zip) {
          return $http({
               method: "GET",
               url: "http://api.apixu.com/v1/forecast.json?key=c5de4db2b1b342e4a2f194637170505&q=" + zip.zip + "&days=1"

          })
     }

     this.getQuote = function () {
          return $http({
               method: "GET",
               url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
          })
     }
     
});