app.controller('eventsCtrl', function($scope, EventsFactory) {

  $scope.events = EventsFactory.all;

});
