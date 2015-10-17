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
        $scope.$broadcast('scroll.refreshComplete');
      });
  };
});
