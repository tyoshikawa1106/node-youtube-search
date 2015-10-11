angular.module("Controllers", []).controller("MainCtrl", ["$scope", "$http", function($scope, $http){
  $scope.doSearch = function() {
    var url = 'https://www.googleapis.com/youtube/v3/search?'
      + [
        'key=AIzaSyCWAtDmTmGfMJMv8jVj2Jb255NmaA7NM2A',
        'q=' + encodeURIComponent($scope.query),
        'part=snippet',
        'order=date',
        'maxResults=50'
      ].join('&');

    $http.jsonp(url, {params: {callback: 'JSON_CALLBACK'}}).success(function(data) {
      console.dir(data);
      $scope.results = data.items;
    });
  }
}]);