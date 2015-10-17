app.controller('eventsCtrl', function($scope, EventsFactory) {

  $scope.events = EventsFactory.all;

  $scope.doRefresh = function () {
    EventsFactory.all.$loaded().then(
      function(x) {
        $scope.events = EventsFactory.all;
      }).catch(
      function(error) {
        console.log("Error refresh :", error);
      }).finally(function() {
        // Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      });
  };
});


angular.module('testApp', ['ionic'])
.controller('MyController', function($scope, $http) {
  $scope.items = [1,2,3];
  $scope.doRefresh = function() {
    $http.get('/new-items')
     .success(function(newItems) {
       $scope.items = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
});
