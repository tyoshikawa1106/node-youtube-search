angular.module("Youtube", ["Controllers", "ngRoute"]).config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller : "MainCtrl",
    templateUrl : "/partials/main.html"
  });
}]);