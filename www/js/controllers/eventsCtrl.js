app.controller('eventsCtrl', function($scope, EventsFactory) {

  $scope.events = EventsFactory.all;

  $scope.doRefresh = function () {
    EventsFactory.all.$loaded().then(
      function() {
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
